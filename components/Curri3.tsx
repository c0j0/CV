'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BriefcaseIcon, GraduationCapIcon, UserIcon, CodeIcon, PhoneIcon, MailIcon, HomeIcon, GlobeIcon, LinkedinIcon, DownloadIcon, AwardIcon, BookOpenIcon, LightbulbIcon } from 'lucide-react'

export default function AlvaroCVWebsite() {
  const [activeTab, setActiveTab] = useState("profile")

  const experiences = [
    { 
      company: "Ecointegral Ingeniería", 
      role: "Departamento TyDE", 
      startDate: new Date("2023-09-01"), 
      endDate: new Date("2024-07-31"), 
      color: "bg-blue-500" 
    },
    { 
      company: "Ecointegral Ingeniería", 
      role: "Prácticas Departamento O&D", 
      startDate: new Date("2023-08-01"), 
      endDate: new Date("2023-08-31"), 
      color: "bg-green-500" 
    },
    { 
      company: "Magtel", 
      role: "Becario. Departamento de Energía renovable", 
      startDate: new Date("2022-07-01"), 
      endDate: new Date("2022-09-30"), 
      color: "bg-yellow-500" 
    }
  ]

  const startDate = new Date("2022-07-01")
  const endDate = new Date("2024-07-31")
  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth()

  const getPositionAndWidth = (start: Date, end: Date) => {
    const startPosition = (start.getFullYear() - startDate.getFullYear()) * 12 + start.getMonth() - startDate.getMonth()
    const duration = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth()
    return {
      left: `${(startPosition / totalMonths) * 100}%`,
      width: `${(duration / totalMonths) * 100}%`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <header className="bg-gray-900 text-white p-6">
              <div className="flex flex-col md:flex-row items-center">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7d73OncUrxrd1gBIMlbPbBBb1jpquh.png" 
                  alt="Foto de Álvaro del Cojo Escribano" 
                  className="rounded-full w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6 border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">Álvaro del Cojo Escribano</h1>
                  <h2 className="text-xl text-gray-300 mb-4">Ingeniero</h2>
                  <p className="text-gray-400 max-w-xl">
                    Nacido en Córdoba el 6 de junio de 1995. Soy una persona resolutiva y disciplinada, 
                    apasionada de la ingeniería, nuevas tecnologías, análisis de datos y ciencias en general. 
                    Me caracterizo por ser autodidacta, positivo y versátil. Siempre abierto a nuevos desafíos, 
                    busco constantemente experiencias que me hagan crecer profesional y personalmente.
                  </p>
                </div>
              </div>
            </header>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="p-6">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="profile">Perfil</TabsTrigger>
                <TabsTrigger value="education">Educación</TabsTrigger>
                <TabsTrigger value="experience">Experiencia</TabsTrigger>
                <TabsTrigger value="skills">Habilidades</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6 transition-all duration-300 ease-in-out">
                <div>
                  <h3 className="text-xl font-semibold flex items-center mb-3">
                    <UserIcon className="mr-2 text-blue-500" /> Contacto
                  </h3>
                  <div className="space-y-2">
                    <p className="flex items-center"><PhoneIcon className="mr-2 h-4 w-4" /> +34 674 23 67 83</p>
                    <p className="flex items-center"><MailIcon className="mr-2 h-4 w-4" /> alvarodcescribano@gmail.com</p>
                    <p className="flex items-center"><HomeIcon className="mr-2 h-4 w-4" /> 14004 Córdoba</p>
                    <p className="flex items-center"><LinkedinIcon className="mr-2 h-4 w-4" /> <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/tu-perfil</a></p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold flex items-center mb-3">
                    <GlobeIcon className="mr-2 text-blue-500" /> Idiomas
                  </h3>
                  <div className="flex space-x-4">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      Español (Nativo)
                    </Badge>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      Inglés (Nivel intermedio)
                    </Badge>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education" className="space-y-6 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold flex items-center mb-3">
                  <GraduationCapIcon className="mr-2 text-blue-500" /> Educación
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Grado en Electrónica Industrial y Automática</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">Universidad de Córdoba, 2015-2020 (a falta de 40 cr)</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Grado en Ingeniería eléctrica</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground mb-2">Universidad de Córdoba, 2021-2024</p>
                      <Card className="mt-4 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-sm flex items-center">
                            <BookOpenIcon className="mr-2 h-4 w-4 text-blue-500" />
                            TFG: Proyecto de Hidrógeno y Energía Fotovoltaica
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs mb-2">"Proyecto de ejecución de instalación eléctrica de una planta de generación de hidrógeno mediante energía fotovoltaica vinculada a una planta de repostaje de vehículos de hidrógeno"</p>
                          <Button variant="outline" size="sm" className="w-full">
                            <DownloadIcon className="mr-2 h-4 w-4" /> Descargar TFG
                          </Button>
                        </CardContent>
                      </Card>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold flex items-center mb-3">
                  <BriefcaseIcon className="mr-2 text-blue-500" /> Experiencia Profesional
                </h3>
                <div className="relative w-full h-32 bg-gray-200 rounded-lg overflow-hidden">
                  {experiences.map((exp, index) => (
                    <div 
                      key={index}
                      className={`absolute ${exp.color} transition-all duration-300 hover:opacity-90`}
                      style={{
                        ...getPositionAndWidth(exp.startDate, exp.endDate),
                        height: '100%',
                        borderRadius: '0.5rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                        <span className="text-xs md:text-sm text-white font-bold text-center leading-tight">
                          {exp.company}
                        </span>
                        <span className="text-xs text-white text-center mt-1 leading-tight">
                          {exp.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Jul 2022</span>
                  <span>Jul 2023</span>
                  <span>Jul 2024</span>
                </div>
                <Accordion type="single" collapsible className="w-full mt-4">
                  {experiences.map((exp, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>
                        <span className={`w-3 h-3 rounded-full mr-2 ${exp.color}`}></span>
                        {exp.company} - {exp.role}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground mb-2">
                          {exp.startDate.toLocaleDateString()} - {exp.endDate.toLocaleDateString()}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Responsabilidad 1</li>
                          <li>Responsabilidad 2</li>
                          <li>Responsabilidad 3</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <h3 className="text-xl font-semibold flex items-center mt-6 mb-3">
                  <AwardIcon className="mr-2 text-blue-500" /> Otras Actividades
                </h3>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-sm">IMIBIC. Participación 1º Hackathon biotecnológico de Andalucía</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">Oftalmología, "Diseño de dispositivo para prevención de la patología del ojo seco".</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <DownloadIcon className="mr-2 h-4 w-4" /> Descargar Proyecto
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold flex items-center mb-3">
                  <CodeIcon className="mr-2 text-blue-500" /> Habilidades y Proyectos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <LightbulbIcon className="mr-2 h-5 w-5 text-yellow-500" /> Habilidades Técnicas
                    </h4>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                      <div className="flex flex-wrap gap-2">
                        {["Office", "Matlab", "Python", "pvsyst", "pvcad", "pvsol", "Autocad", "QGis", "Caneco BT", "Dmelect", "Andelet"].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 transition-all duration-300 hover:bg-blue-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <BriefcaseIcon className="mr-2 h-5 w-5 text-green-500"
                      /> Proyectos Destacados
                    </h4>
                    <div className="space-y-4">
                      <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="text-sm">PSFV "LA TEJERA"</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs mb-2">Proyecto de Planta Solar Fotovoltaica</p>
                          <Button variant="outline" size="sm" className="w-full">
                            <DownloadIcon className="mr-2 h-4 w-4" /> Descargar Proyecto
                          </Button>
                        </CardContent>
                      </Card>
                      <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="text-sm">Instalaciones para generación de 411tM/año de Hidrógeno Renovable</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs mb-2">Proyecto de generación de hidrógeno renovable</p>
                          <Button variant="outline" size="sm" className="w-full">
                            <DownloadIcon className="mr-2 h-4 w-4" /> Descargar Proyecto
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <footer className="mt-8 text-center">
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-gray-200 transition-colors">
              <PhoneIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" className="text-white hover:text-gray-200 transition-colors">
              <MailIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" className="text-white hover:text-gray-200 transition-colors">
              <HomeIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" className="text-white hover:text-gray-200 transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}