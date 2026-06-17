export interface NavigationLink {
  href: string;
  label: string;
  children?: NavigationLink[];
}

type Translator = (key: string) => string;

export function getNavigation(t: Translator): NavigationLink[] {
  return [
    {
      href: "/",
      label: t("home"),
    },
    {
      href: "/about",
      label: t("about"),
    },
    {
      href: "/programs",
      label: t("programs"),
      children: [
        {
          href: "/talent-4-startups",
          label: t("talent4Startups"),
        },
        {
          href: "/baobab-dev-program",
          label: t("baobabDevProgram"),
        },
      ],
    },
    {
      href: "/services",
      label: t("services"),
    },
    {
      href: "/innovation-hub",
      label: t("innovationHub"),
    },
    {
      href: "/projects",
      label: t("projects"),
    },
    {
      href: "/impact",
      label: t("impact"),
    },
    {
      href: "/partners",
      label: t("partners"),
    },
  ];
}
