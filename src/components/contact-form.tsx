"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    color: "text-afrix-red",
    bgColor: "bg-afrix-red/10",
    label: "Adresse",
    value: "Goma, Republique Democratique du Congo",
  },
  {
    icon: Phone,
    color: "text-afrix-green",
    bgColor: "bg-afrix-green/10",
    label: "Telephone",
    value: "+243 812 345 678",
  },
  {
    icon: Mail,
    color: "text-afrix-blue",
    bgColor: "bg-afrix-blue/10",
    label: "Email",
    value: "contact@afrixglobal.com",
  },
  {
    icon: Clock,
    color: "text-afrix-yellow",
    bgColor: "bg-afrix-yellow/10",
    label: "Horaires",
    value: "Lun - Ven : 8h00 - 17h00",
  },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      className="w-full py-16 bg-afrix-dark flex flex-col items-center gap-12"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 0%, rgba(66, 133, 244, 0.3), transparent 24%), radial-gradient(circle at 100% 0%, rgba(219, 68, 55, 0.3), transparent 18%)",
      }}
    >
      <div className="w-[90%] max-w-300 flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div className="w-full lg:w-2/5 flex flex-col gap-10">
          <h2 className="text-2xl font-bold text-white">Nos coordonnees</h2>
          <p className="text-white/70 text-sm leading-relaxed">
            {
              "N'hesitez pas a nous contacter par email, telephone ou en nous rendant visite dans nos locaux. Notre equipe sera ravie de vous accompagner."
            }
          </p>

          <div className="flex flex-col gap-8 mt-4">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${info.bgColor} flex items-center justify-center shrink-0`}
                >
                  <info.icon className={`w-5 h-5 ${info.color}`} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{info.label}</p>
                  <p className="text-white/60 text-sm">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-3/5">
          <Card className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md">
            <CardContent className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12">
                  <CheckCircle className="w-16 h-16 text-afrix-green" />
                  <h3 className="text-xl font-bold text-white">
                    Message envoye !
                  </h3>
                  <p className="text-white/70 text-center">
                    Merci de nous avoir contacte. Nous vous repondrons dans les
                    plus brefs delais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold text-white">
                    Envoyez-nous un message
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 flex flex-col gap-2">
                      <Label
                        htmlFor="firstName"
                        className="text-white/80 text-sm"
                      >
                        Prenom
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Votre prenom"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-afrix-blue"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <Label
                        htmlFor="lastName"
                        className="text-white/80 text-sm"
                      >
                        Nom
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Votre nom"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-afrix-blue"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-white/80 text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-afrix-blue"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject" className="text-white/80 text-sm">
                      Sujet
                    </Label>
                    <Input
                      id="subject"
                      placeholder="L'objet de votre message"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-afrix-blue"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-white/80 text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Ecrivez votre message ici..."
                      required
                      rows={5}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-afrix-blue resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="rounded-full bg-afrix-blue text-white hover:bg-[#3367d6] px-8 py-6 text-base font-medium self-start"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
