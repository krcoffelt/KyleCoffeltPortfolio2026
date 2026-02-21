import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import kcyDesign1 from "@/assets/kcy-design-1.jpg";
import kcyDesign2 from "@/assets/kcy-design-2.png";
import kcyDesign3 from "@/assets/kcy-design-3.jpg";
import kcyDesign4 from "@/assets/kcy-design-4.jpg";
import kcyDesign5 from "@/assets/kcy-design-5.jpg";
import kcyDesign6 from "@/assets/kcy-design-6.jpg";
import kcyDesign10 from "@/assets/kcy-design-10.jpg";
import kcyDesign11 from "@/assets/kcy-design-11.jpg";
import kcyYouthRevival from "@/assets/kcy-youth-revival.jpg";
import kcyLaunching from "@/assets/kcy-launching.jpg";
import plateNew1 from "@/assets/plate-new-1-converted.jpg";
import plateNew3 from "@/assets/plate-new-3.jpg";
import plateNew4 from "@/assets/plate-new-4.jpg";
import plateNew9 from "@/assets/plate-new-9.jpg";
import plateNew10 from "@/assets/plate-new-10.jpg";
import platePost1 from "@/assets/plate-post-1.webp";
import platePost2 from "@/assets/plate-post-2.webp";
import platePost3 from "@/assets/plate-post-3.webp";
import platePost4 from "@/assets/plate-post-4.webp";
import platePost5 from "@/assets/plate-post-5.webp";
import platePost6 from "@/assets/plate-post-6.webp";
import platePost7 from "@/assets/plate-post-7.webp";
import platePost8 from "@/assets/plate-post-8.webp";
import magnumTpiConcert from "@/assets/magnum-tpi-concert.jpg";
import magnumHalloween from "@/assets/magnum-halloween.jpg";
import magnumTpiSpread from "@/assets/magnum-tpi-spread.jpg";
import magnumServiceTrucks from "@/assets/magnum-service-trucks.jpg";
import magnum2024Equipment from "@/assets/magnum-2024-equipment.jpg";
import magnumBrochures2 from "@/assets/magnum-brochures-2.webp";
import magnumHats2 from "@/assets/magnum-hats-2.webp";
import magnumBioharvestnet from "@/assets/magnum-bioharvestnet.webp";
import magnumWall from "@/assets/magnum-wall.webp";
import fccFunWeek from "@/assets/fcc-fun-week.png";
import fccSlamDunk from "@/assets/fcc-slam-dunk.png";
import fccSundays from "@/assets/fcc-sundays.png";
import fccImage4 from "@/assets/fcc-image-4.png";
import fccImage5 from "@/assets/fcc-image-5.png";
import fccRepSchool from "@/assets/fcc-rep-school.jpg";
import fccCamp2019 from "@/assets/fcc-camp-2019.jpg";
import fccStateOfMind from "@/assets/fcc-state-of-mind.jpg";
import hometownMiloOtis from "@/assets/hometown-milo-otis.jpg";
import hometownZentonic from "@/assets/hometown-zentonic.png";
import hometownHolysmokes from "@/assets/hometown-holysmokes.png";
import hometownTramanto from "@/assets/hometown-tramanto.png";
import hometownTruepath from "@/assets/hometown-truepath.png";
import hometownGoldenhour from "@/assets/hometown-goldenhour.png";
import hometownStillstudio from "@/assets/hometown-stillstudio.png";
import hometownWinningGamePlan from "@/assets/hometown-winning-game-plan.jpg";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "Hometown Marketing",
      position: "Agency Owner",
      year: "2025",
      image: hometownMiloOtis,
      designs: [hometownMiloOtis, hometownZentonic, hometownHolysmokes, hometownTramanto, hometownTruepath, hometownGoldenhour, hometownStillstudio, hometownWinningGamePlan],
      description: "I started a marketing agency with the goal of helping small businesses with logos, websites, and other marketing needs.",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    },
    {
      title: "Plate Italiano Moderno",
      position: "Marketing Manager",
      year: "2025",
      image: project1,
      designs: [plateNew1, plateNew3, plateNew4, plateNew9, plateNew10, platePost1, platePost2, platePost3, platePost4, platePost5, platePost6, platePost7, platePost8],
      description: "As Marketing Manager at Plate Restaurant, I oversee all design initiatives including social media assets, menu design, print materials, and digital campaigns to create a cohesive brand experience.",
      gradient: "from-pink-400 via-rose-500 to-red-500",
    },
    {
      title: "MagnumENP",
      position: "Content Marketing Manager",
      year: "2023-2024",
      image: magnumServiceTrucks,
      designs: [magnumTpiConcert, magnumHalloween, magnumTpiSpread, magnumServiceTrucks, magnum2024Equipment, magnumBrochures2, magnumHats2, magnumBioharvestnet, magnumWall],
      description: "As Content Marketing Manager, I led all design initiatives for trade show materials including banners, brochures, and branded merchandise. Additionally, I produced content across social media, magazine print advertisements, and web platforms.",
      gradient: "from-blue-600 via-purple-600 to-fuchsia-500",
    },
    {
      title: "Kingdom City Church",
      position: "Youth Pastor",
      year: "2022",
      image: project3,
      designs: [kcyDesign1, kcyDesign2, kcyDesign3, kcyDesign5, kcyDesign10, kcyDesign11, kcyYouthRevival, kcyLaunching],
      description: "I spent a year as the Youth Pastor at a church in Kansas City called Kingdom City Church. Part of my job was to create assets and designs for both printed and digital use.",
      gradient: "from-fuchsia-500 via-pink-500 to-rose-400",
    },
    {
      title: "Hillsong College",
      position: "Social Media Manager",
      year: "2019-2021",
      image: project1,
      designs: [project1, project2, project3],
      description: "As Social Media Manager for Hillsong College in Sydney, Australia, I managed content for the main college page, First Year Intake, and Second Year Intake. I created promotional materials for campus events and showcased student life at this Bible College where I both studied and worked.",
      gradient: "from-indigo-600 via-blue-500 to-cyan-400",
    },
    {
      title: "Free Chapel Church",
      position: "Freelance Designer",
      year: "2019",
      image: fccFunWeek,
      designs: [fccFunWeek, fccSlamDunk, fccSundays, fccImage4, fccImage5, fccRepSchool, fccCamp2019, fccStateOfMind],
      description: "Freelance design work creating social media content, sermon graphics, branded merchandise, and marketing materials to support the church's communication and outreach efforts.",
      gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="work" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-16 font-light">
          Selected Work
        </h2>

        <div className="space-y-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-t border-border last:border-b transition-all duration-300"
            >
              <div
                className="group relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => toggleExpanded(index)}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} transition-opacity duration-500 ${
                    hoveredIndex === index && expandedIndex !== index ? "opacity-20" : "opacity-0"
                  }`}
                />
                
                <div className="py-8 flex items-center justify-between relative z-10">
                  <div>
                    <h3 className="text-4xl md:text-6xl font-light tracking-tight transition-all duration-300 group-hover:translate-x-4">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 font-light transition-all duration-300 group-hover:translate-x-4">
                      {project.position}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-8">
                    <span className="text-sm text-muted-foreground font-light">
                      {project.year}
                    </span>
                    <div className="text-muted-foreground transition-transform duration-300" style={{ transform: expandedIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      <span className="text-2xl font-light">+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedIndex === index ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-12 px-4 animate-fade-in">
                  <p className="text-muted-foreground mb-8 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.designs.map((design, designIndex) => (
                      <div
                        key={designIndex}
                        className="aspect-[4/3] overflow-hidden hover-scale cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(design);
                        }}
                      >
                        <img
                          src={design}
                          alt={`${project.title} design ${designIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-transparent">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
              aria-label="Close image"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Expanded view"
                className="max-w-full max-h-[95vh] object-contain animate-scale-in"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
