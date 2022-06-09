import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository"
import { ListSpecificationUseCase} from "./ListSpecificationUseCase"
import { ListSpecificationController } from "./ListSpecificationController"

const specificationsRepository =  SpecificationsRepository.getInstance()
const listSpecificationsUseCase = new ListSpecificationUseCase(specificationsRepository)
const listSpecificationsController = new ListSpecificationController(listSpecificationsUseCase)

export {listSpecificationsController}