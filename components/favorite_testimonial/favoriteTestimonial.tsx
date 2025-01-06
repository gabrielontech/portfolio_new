import Image from "next/image";
import Gael from "@/public/assets/images/Gael.jpg";
import { useTranslations } from 'next-intl';

interface TestimonialProps {
  quote: string;
  authorImage: string;
  authorName: string;
  authorTitle: string;
  companyName: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  authorImage,
  authorName,
  authorTitle,
  companyName,
}) => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="text-3xl mb-16 font-extrabold tracking-wider text-gray-300 opacity-80 hover:opacity-100 transition-opacity duration-200">
          {companyName}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
          "{quote}"
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden">
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
  const t = useTranslations('testimonial');

  return (
    <Testimonial
      quote={t('quote')}
      authorImage={Gael.src}
      authorName={t('author_name')}
      authorTitle={t('author_title')}
      companyName={t('company_name')}
    />
  );
}
