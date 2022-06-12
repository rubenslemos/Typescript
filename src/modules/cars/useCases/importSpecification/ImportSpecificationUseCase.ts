import fs from 'fs'
import {parse as csvParse} from 'csv-parse'
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

interface IImportSpecification{
  name: string
  description: string
}

class ImportSpecificationUseCase {

  constructor(private specificationsRepository: ISpecificationsRepository){}

  loadSpecifications(file: Express.Multer.File): Promise<IImportSpecification[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const specifications: IImportSpecification[] = []

      const parseFile = csvParse()

      stream.pipe(parseFile)

      parseFile
        .on("data", async (line) =>{
          const [name, description] = line
          specifications.push({
            name, 
            description
          })
        })
        .on("end", () => {
          fs.promises.unlink(file.path)
          resolve(specifications)
        })
        .on("error", (err) => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<void>{
    const specifications = await this.loadSpecifications(file)
    specifications.map(async (category) => {
      const { name, description } = category

      const existSpecification = this.specificationsRepository.findByName(name)
      if(!existSpecification) {
        this.specificationsRepository.create({
          name, 
          description,
        })
      }
    })
  }
}
export { ImportSpecificationUseCase }