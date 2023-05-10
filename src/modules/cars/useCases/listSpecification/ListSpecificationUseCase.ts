import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string
  description: string
}
class ListSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository){}
  execute(): Specification[] {
    const specifications = this.specificationsRepository.list()
    return specifications
  }
}

export { ListSpecificationUseCase }