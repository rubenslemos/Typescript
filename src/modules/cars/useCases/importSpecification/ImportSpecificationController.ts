import {Response, Request} from "express"
import { ImportSpecificationUseCase } from "./ImportSpecificationUseCase"


class ImportSpecificationController {
  constructor(private importSpecificationUseCase: ImportSpecificationUseCase){}
  handle (request: Request, response: Response): Response {
    const {file} = request
    this.importSpecificationUseCase.execute(file)
    return response.status(200).send()
  }

}

export {ImportSpecificationController}