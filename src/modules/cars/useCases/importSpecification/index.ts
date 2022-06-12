import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ImportSpecificationController } from "./ImportSpecificationController";
import { ImportSpecificationUseCase } from "./ImportSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance()
const importSpecificationUseCase = new ImportSpecificationUseCase(specificationsRepository)
const importSpecificationController = new ImportSpecificationController(importSpecificationUseCase)

export { importSpecificationController }