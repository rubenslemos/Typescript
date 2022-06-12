import { Router } from 'express';
import multer from 'multer'

import { createSpecificationsController } from '../modules/cars/useCases/createSpecification'
import { importSpecificationController } from '../modules/cars/useCases/importSpecification'
import { listSpecificationsController } from '../modules/cars/useCases/listSpecification';

const specificationsRoutes = Router()
const upload = multer({
  dest: "./tmp",
})

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationsController.handle(request, response)
})

specificationsRoutes.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response)
})
specificationsRoutes.post("/import",  upload.single("file"),(request, response)=> {
  return importSpecificationController.handle(request, response)
})
export {specificationsRoutes}