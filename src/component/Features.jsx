import { Microscope, Leaf, Heart, FlaskConical } from "lucide-react";

const featuresData = [
  { icon: Microscope, text: "Clinically Researched" },
  { icon: Leaf, text: "100% Organic" },
  { icon: Heart, text: "Wellness Focused" },
  { icon: FlaskConical, text: "Science + Nature" },
];

const Features = () => {
  return (
    <div id="features" className="h-padding py-8">
      <div className="flex flex-wrap justify-between gap-4">
        {featuresData.map(({ icon: Icon, text }, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center gap-3 text-center"
          >
            <div className="border rounded-full p-4 grey">
              <Icon className="w-8 h-8" />
            </div>
            <span className="feature-item">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
