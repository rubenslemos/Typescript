import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository"
import { CreateSpecificationUseCase} from "./CreateSpecificationUseCase"
import { CreateSpecificationController } from "./CreateSpecificationController"

const specificationsRepository = SpecificationsRepository.getInstance()
const createSpecificationsUseCase = new CreateSpecificationUseCase(specificationsRepository)
const createSpecificationsController = new CreateSpecificationController(createSpecificationsUseCase)

export {createSpecificationsController}