'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BriefcaseIcon, GraduationCapIcon, UserIcon, CodeIcon, PhoneIcon, MailIcon, HomeIcon, GlobeIcon, LinkedinIcon, DownloadIcon, AwardIcon, BookOpenIcon, LightbulbIcon, Zap, Wind, Sun, Battery, CheckCircle2, FolderIcon, MonitorIcon, PenToolIcon, WrenchIcon } from 'lucide-react'

export default function AlvaroCVWebsite() {
  const [activeTab, setActiveTab] = useState("profile")

  const experiences = [
    { 
      company: "Ecointegral Ingenier&#237;a", 
      role: "Departamento TyDE", 
      startDate: new Date("2023-09-01"), 
      endDate: new Date("2024-07-31"), 
      color: "bg-green-500" 
    },
    { 
      company: "Ecointegral Ingenier&#237;a", 
      role: "Pr&#225;cticas Departamento O&amp;D", 
      startDate: new Date("2023-08-01"), 
      endDate: new Date("2023-08-31"), 
      color: "bg-blue-500" 
    },
    { 
      company: "Magtel", 
      role: "Becario. Departamento de Energ&#237;a renovable", 
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
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-gray-800">
      <div className="container mx-auto px-6 py-8">
        <Card className="w-full max-w-5xl mx-auto overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-0">
            <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
              <div className="flex flex-col md:flex-row items-center">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7d73OncUrxrd1gBIMlbPbBBb1jpquh.png" 
                  alt="Foto de &#193;lvaro del Cojo Escribano" 
                  width={160}
                  height={160}
                  className="rounded-full object-cover mb-6 md:mb-0 md:mr-8 border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-bold mb-3">&#193;lvaro del Cojo Escribano</h1>
                  <h2 className="text-2xl text-green-300 mb-3">Ingeniero en Energ&#237;as Renovables</h2>
                  <p className="text-base text-gray-200 max-w-2xl leading-relaxed">
                    Nacido en C&#243;rdoba el 6 de junio de 1995. Resolutivo, disciplinado y apasionado por la ingenier&#237;a y nuevas tecnolog&#237;as. Autodidacta, positivo y vers&#225;til, siempre buscando nuevos desaf&#237;os para crecer profesional y personalmente.
                  </p>
                </div>
              </div>
            </header>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="p-6">
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="profile" className="text-base">Perfil</TabsTrigger>
                <TabsTrigger value="experience" className="text-base">Experiencia</TabsTrigger>
                <TabsTrigger value="projects" className="text-base">Proyectos</TabsTrigger>
                <TabsTrigger value="skills" className="text-base">Habilidades</TabsTrigger>
                <TabsTrigger value="education" className="text-base">Educaci&#243;n</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center mb-3">
                      <UserIcon className="mr-3 text-green-500" /> Contacto
                    </h3>
                    <div className="space-y-2 text-base">
                      <p className="flex items-center"><PhoneIcon className="mr-3 h-5 w-5 text-green-500" /> +34 674 23 67 83</p>
                      <p className="flex items-center"><MailIcon className="mr-3 h-5 w-5 text-green-500" /> alvarodcescribano@gmail.com</p>
                      <p className="flex items-center"><HomeIcon className="mr-3 h-5 w-5 text-green-500" /> 14004 C&#243;rdoba</p>
                      <p className="flex items-center"><LinkedinIcon className="mr-3 h-5 w-5 text-green-500" /> <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/tu-perfil</a></p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center mb-3">
                      <GlobeIcon className="mr-3 text-green-500" /> Idiomas
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-base px-3 py-1">
                        Espa&#241;ol (Nativo)
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-base px-3 py-1">
                        Ingl&#233;s (Intermedio)
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg">
                  <DownloadIcon className="mr-3 h-5 w-5" /> Descargar Curr&#237;culum
                </Button>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center mb-3">
                  <BriefcaseIcon className="mr-3 text-green-500" /> Experiencia Profesional
                </h3>
                <div className="relative w-full h-20 bg-gray-200 rounded-lg overflow-hidden">
                  {experiences.map((exp, index) => (
                    <div 
                      key={index}
                      className={`absolute ${exp.color} transition-all duration-300 hover:opacity-90`}
                      style={{
                        ...getPositionAndWidth(exp.startDate, exp.endDate),
                        height: '100%',
                        borderRadius: '0.25rem',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                      }}
                    >
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>Jul 2022</span>
                  <span>Jul 2023</span>
                  <span>Jul 2024</span>
                </div>
                <Accordion type="single" collapsible className="w-full mt-3">
                  {experiences.map((exp, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg">
                        <span className={`w-4 h-4 rounded-full mr-3 ${exp.color}`}></span>
                        {exp.company} - {exp.role}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-base text-gray-600 mb-2">
                          {exp.startDate.toLocaleDateString()} - {exp.endDate.toLocaleDateString()}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base">
                          <li>Responsabilidad 1</li>
                          <li>Responsabilidad 2</li>
                          <li>Responsabilidad 3</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center mb-3">
                  <FolderIcon className="mr-3 text-green-500" /> Proyectos Destacados
                </h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg flex items-center">
                        <Sun className="mr-3 h-5 w-5 text-yellow-500" />
                        PSFV &quot;LA TEJERA&quot;
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-3">
                      <p className="text-base mb-3">Proyecto de Planta Solar Fotovoltaica de 50 MW en Extremadura</p>
                      <ul className="list-disc list-inside space-y-2 text-base mb-3">
                        <li>Dise&#241;o y optimizaci&#243;n del layout con m&#225;s de 100.000 m&#243;dulos fotovoltaicos bifaciales de alta eficiencia</li>
                        <li>Simulaci&#243;n avanzada de producci&#243;n energ&#233;tica utilizando PVsyst, logrando un rendimiento espec&#237;fico de 1900 kWh/kWp/a&#241;o</li>
                        <li>An&#225;lisis detallado de sombras y p&#233;rdidas del sistema para maximizar la captaci&#243;n solar</li>
                        <li>Dise&#241;o del sistema de seguimiento solar de un eje para aumentar la producci&#243;n en un 25%</li>
                        <li>Estudio de viabilidad econ&#243;mica con un TIR proyectado del 12% y un per&#237;odo de retorno de 7 a&#241;os</li>
                        <li>Plan de mitigaci&#243;n de impacto ambiental, incluyendo medidas de protecci&#243;n de la fauna local</li>
                      </ul>
                      <Button variant="outline" size="lg" className="w-full text-green-600 border-green-600 hover:bg-green-50 text-base">
                        <DownloadIcon className="mr-2 h-5 w-5" /> Descargar Proyecto
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg flex items-center">
                        <Zap className="mr-3 h-5 w-5 text-blue-500" />
                        Instalaciones para generaci&#243;n de Hidr&#243;geno Renovable
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-3">
                      <p className="text-base mb-3">Proyecto de generaci&#243;n de 411tM/a&#241;o de hidr&#243;geno renovable en Puertollano</p>
                      <ul className="list-disc list-inside space-y-2 text-base mb-3">
                        <li>Dise&#241;o de un sistema de electr&#243;lisis PEM de 20 MW con una eficiencia del 70%</li>
                        <li>Integraci&#243;n con una planta fotovoltaica dedicada de 100 MW para garantizar el suministro 100% renovable</li>
                        <li>Implementaci&#243;n de un sistema de compresi&#243;n y almacenamiento de hidr&#243;geno a 700 bar</li>
                        <li>Desarrollo de un sistema de control avanzado para optimizar la producci&#243;n seg&#250;n la disponibilidad de energ&#237;a renovable</li>
                        <li>Dise&#241;o de una estaci&#243;n de repostaje de hidr&#243;geno para veh&#237;culos pesados con capacidad de 1000 kg/d&#237;a</li>
                        <li>An&#225;lisis del ciclo de vida y c&#225;lculo de la reducci&#243;n de emisiones de CO2 (estimada en 20.000 tCO2eq/a&#241;o)</li>
                      </ul>
                      <Button variant="outline" size="lg" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50 text-base">
                        <DownloadIcon className="mr-2 h-5 w-5" /> Descargar Proyecto
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <h3 className="text-xl font-semibold flex items-center mt-6 mb-3">
                  <LightbulbIcon className="mr-3 text-green-500" /> Proyectos Futuros
                </h3>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="py-3">
                    <CardTitle className="text-lg flex items-center">
                      <Battery className="mr-3 h-5 w-5 text-purple-500" />
                      Sistema de Almacenamiento de Energ&#237;a con Bater&#237;as a Gran Escala
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-3">
                    <p className="text-base mb-3">Proyecto de dise&#241;o e implementaci&#243;n de un sistema de almacenamiento de energ&#237;a de 100 MWh para una red el&#233;ctrica insular</p>
                    <ul className="list-disc list-inside space-y-2 text-base">
                      <li>Evaluaci&#243;n comparativa de tecnolog&#237;as de bater&#237;as: Li-ion, flujo redox de vanadio y bater&#237;as de sodio-azufre</li>
                      <li>Dise&#241;o del sistema de conversi&#243;n de potencia (PCS) de 50 MW con inversores bidireccionales de &#250;ltima generaci&#243;n</li>
                      <li>Desarrollo de algoritmos de gesti&#243;n energ&#233;tica para optimizar el arbitraje y los servicios de red</li>
                      <li>Integraci&#243;n con sistemas de energ&#237;a renovable existentes (e&#243;lica y solar) para maximizar el aprovechamiento</li>
                      <li>Estudio de la reducci&#243;n de costes operativos y mejora de la estabilidad de la red insular</li>
                      <li>An&#225;lisis de viabilidad econ&#243;mica considerando m&#250;ltiples flujos de ingresos y esquemas de incentivos</li>
                      <li>Dise&#241;o de un sistema de refrigeraci&#243;n innovador para optimizar la vida &#250;til de las bater&#237;as en clima c&#225;lido</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center mb-3">
                  <CodeIcon className="mr-3 text-green-500" /> Habilidades T&#233;cnicas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg flex items-center">
                        <MonitorIcon className="mr-3 h-5 w-5 text-blue-500" />
                        Ofim&#225;tica
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-3">
                      <div className="flex flex-wrap gap-2">
                        {["Office", "Google Workspace", "LibreOffice"].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 text-base">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg flex items-center">
                        <PenToolIcon className="mr-3 h-5 w-5 text-green-500" />
                        Dise&#241;o CAD
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-3">
                      <div className="flex flex-wrap gap-2">
                        {["AutoCAD", "SolidWorks", "SketchUp"].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800 text-base">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg flex items-center">
                        <CodeIcon className="mr-3 h-5 w-5 text-purple-500" />
                        Programaci&#243;n
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-3">
                      <div className="flex flex-wrap gap-2">
                        {["Python", "MATLAB", "C++", "SQL"].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800 text-base">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg flex items-center">
                        <WrenchIcon className="mr-3 h-5 w-5 text-yellow-500" />
                        Dise&#241;o El&#233;ctrico
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-3">
                      <div className="flex flex-wrap gap-2">
                        {["PVsyst", "PVcad", "PVsol", "Caneco BT", "Dmelect", "Andelet"].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-yellow-100 text-yellow-800 text-base">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center mb-3">
                  <GraduationCapIcon className="mr-3 text-green-500" /> Educaci&#243;n
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg">Grado en Electr&#243;nica Industrial y Autom&#225;tica</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base text-gray-600">Universidad de C&#243;rdoba, 2015-2020 (a falta de 40 cr)</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg">Grado en Ingenier&#237;a el&#233;ctrica</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base text-gray-600 mb-3">Universidad de C&#243;rdoba, 2021-2024</p>
                      <Card className="mt-3 hover:shadow-lg transition-shadow duration-300 bg-green-50">
                        <CardHeader className="py-3">
                          <CardTitle className="text-lg flex items-center">
                            <BookOpenIcon className="mr-3 h-5 w-5 text-green-500" />
                            TFG: Proyecto de Hidr&#243;geno y Energ&#237;a Fotovoltaica
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="py-3">
                          <p className="text-base mb-3">&quot;Proyecto de ejecuci&#243;n de instalaci&#243;n el&#233;ctrica de una planta de generaci&#243;n de hidr&#243;geno mediante energ&#237;a fotovoltaica vinculada a una planta de repostaje de veh&#237;culos de hidr&#243;geno&quot;</p>
                          <Button variant="outline" size="lg" className="w-full text-green-600 border-green-600 hover:bg-green-100 text-base">
                            <DownloadIcon className="mr-2 h-5 w-5" /> Descargar TFG
                          </Button>
                        </CardContent>
                      </Card>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <footer className="mt-6 text-center">
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="lg" className="text-white hover:text-gray-200 transition-colors">
              <PhoneIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:text-gray-200 transition-colors">
              <MailIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:text-gray-200 transition-colors">
              <HomeIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:text-gray-200 transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}