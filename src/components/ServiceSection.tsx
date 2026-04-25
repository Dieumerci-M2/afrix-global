"use client";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  ImageIcon,
  Monitor,
  PenTool,
  Smartphone,
} from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const },
  },
};

const services = [
  {
    icon: Code,
    color: "text-[#4285f4]",
    title: "Developpement web",
    description:
      "Nous développons des sites web modernes et performants, adaptés aux besoins spécifiques de chaque projet.",
  },
  {
    icon: Smartphone,
    color: "text-[#30b43f]",
    title: "Developpement Mobile",
    description:
      "Nous développons des applications mobiles modernes et performantes, adaptées aux besoins spécifiques de chaque projet.",
  },
  {
    icon: Monitor,
    color: "text-[#fbbc05]",
    title: "Marketing Digital",
    description:
      "Nous développons des stratégies de marketing digital efficaces, adaptées aux besoins spécifiques de chaque projet.",
  },
  {
    icon: Globe,
    color: "text-[#30b43f]",
    title: "Consultation Informatique",
    description:
      "Nous proposons des services de consultation informatique adaptés aux besoins spécifiques de chaque projet.",
  },
  {
    icon: ImageIcon,
    color: "text-[#ea4335]",
    title: "Communication visuelle",
    description:
      "Nous développons des solutions de communication visuelle modernes, adaptées aux besoins spécifiques de chaque projet.",
  },
  {
    icon: PenTool,
    color: "text-[#4285f4]",
    title: "Redaction des contenus",
    description:
      "Nous développons des contenus de qualité, adaptés aux besoins spécifiques de chaque projet.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full flex flex-col justify-center lg:gap-[5vw] items-center bg-afrix-dark"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 0%, rgba(244, 180, 0, 0.3), transparent 25%), radial-gradient(circle at 100% 100%, rgba(56, 129, 245, 0.15), transparent 35%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 md:mb-0 md:mt-16 text-white text-center">
          NOS SERVICES
        </h2>
      </motion.div>

      <motion.div
        className="w-[90%] lg:w-[80%] flex flex-wrap justify-center gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{
              y: -10,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="w-full sm:w-[45%] lg:w-[30%] glass rounded-2xl border border-white/20 text-center transition-transform hover:-translate-y-1 hover:shadow-2xl bg-black/30"
          >
            <CardContent className="p-8 flex flex-col items-center gap-4">
              <service.icon
                aria-hidden="true"
                className={`w-12 h-12 lg:w-16 lg:h-16 ${service.color}`}
              />
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
