import Image from "next/image";
import Gael from "@/public/assets/images/Gael.jpg";
interface TestimonialProps {
  quote: string;
  authorImage: string;
  authorName: string;
  authorTitle: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  authorImage,
  authorName,
  authorTitle,
}) => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="text-3xl mb-16 font-extrabold tracking-wider text-gray-300 opacity-80 hover:opacity-100 transition-opacity duration-200">
          LAZONEGRISE
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
          "{quote}"
        </h2>
        <div className="flex flex-col items-center">
          <div className=" w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={Gael}
              alt="Gael"
              width={80}
              height={80}
              className="object-cover w-full h-full mb-4"
            />
          </div>
          <p className="text-xl font-semibold">{authorName}</p>
          <p className="text-gray-400">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  return (
    <Testimonial
      quote="Gabriel is not only a great developer but also a great person. He is very dedicated to his work and always goes above and beyond to ensure that the project is successful."
      authorImage={Gael.src}
      authorName="Gael"
      authorTitle="Founder, LazoneGrise"
    />
  );
}
