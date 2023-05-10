import { Response, Request } from "express"
import { ListSpecificationUseCase } from "./ListSpecificationUseCase"

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    
  const all = this.listSpecificationUseCase.execute()

  return response.status(201).json({Especificações: all})
  }
}
export { ListSpecificationController }