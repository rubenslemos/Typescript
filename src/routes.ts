import { Request, Response } from "express";
import CreateCourseService from './CreateCourseService'

export function createCourse(request:Request, response:Response){
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Rubens",
    duration: 100
  })
    CreateCourseService.execute({
    name: "Typescript",
    educator: "Rubens"
  })
  return response.send()
}