import profilePhoto from "../assets/images/profile.jpg";

type PersonalInfo = {
  name: string;
  role: string;
  photo: string;
  location: string;
  relocation: string;
  email: string;
  phone: string;
  linkedin: {
    url: string;
    label: string;
  };
  github: {
    url: string;
    label: string;
  };
  portfolio: {
    url: string;
    label: string;
  };
  repository: {
    url: string;
    label: string;
  };
};

export const personal: PersonalInfo = {
  name: "Peter Dani",
  role: "Senior Frontend Developer",
  photo: profilePhoto,
  location: "Budapest, Hungary",
  relocation: "Relocating to London · Requires Visa",
  email: "danipeti@gmail.com",
  phone: "+36 30 367 0001",
  linkedin: {
    url: "https://www.linkedin.com/in/danipeti",
    label: "linkedin.com/in/danipeti",
  },
  github: {
    url: "https://github.com/danipeti",
    label: "github.com/danipeti",
  },
  portfolio: {
    url: "https://danipeti.github.io/cv",
    label: "danipeti.github.io/cv",
  },
  repository: {
    url: "https://github.com/danipeti/cv",
    label: "github.com/danipeti/cv",
  },
};
