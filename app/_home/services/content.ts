import type { StaticImageData } from "next/image";
import shipping from "../../../public/assets/home/services/service-01.webp";
import trucks from "../../../public/assets/home/services/service-02.webp";
import blueCar from "../../../public/assets/home/services/service-03-blue.webp";
import whiteCar from "../../../public/assets/home/services/service-03-white.webp";
import orders from "../../../public/assets/home/services/service-04.webp";
import storage from "../../../public/assets/home/services/service-05.webp";
import customs from "../../../public/assets/home/services/service-06.webp";

interface Artwork {
  image: StaticImageData;
  width: string;
  left: string;
  bottom: string;
}

interface Service {
  id: string;
  title: string;
  lettering: string;
  description: string;
  artwork: Artwork[];
}

export const services: Service[] = [
  {
    id: "passenger-cars",
    title: "خودروهای سواری",
    lettering: "Cars",
    description: "خودروهای موجود و سفارش اختصاصی، گالری و فیلتر، مشخصات کامل، قیمت نهایی، رزرو و پیش‌پرداخت",
    artwork: [
      { image: blueCar, width: "60%", left: "-1%", bottom: "4%" },
      { image: whiteCar, width: "89%", left: "21%", bottom: "-29%" },
    ],
  },
  {
    id: "trucks",
    title: "کشنده و کامیون",
    lettering: "Truck",
    description: "کشنده‌های موجود و سفارشی، گالری و فیلتر، مشخصات فنی، ترخیص، ثبت سفارش، اسقاط",
    artwork: [{ image: trucks, width: "86%", left: "9%", bottom: "-10%" }],
  },
  {
    id: "shipping",
    title: "حمل و نقل",
    lettering: "Shipping",
    description: "شیپینگ کانتینری، ترانزیت زمینی، حمل ریلی، حمل داخلی ایران، درخواست چند قلم کالا",
    artwork: [{ image: shipping, width: "86%", left: "7%", bottom: "-46%" }],
  },
  {
    id: "customs",
    title: "واردات، صادرات و ترخیص",
    lettering: "Import/Export",
    description: "واردات و صادرات کالا، ترخیص مستقل، گمرکات سرزمین اصلی و مناطق آزاد، مسیر ترکیبی خدمات",
    artwork: [{ image: customs, width: "54%", left: "23%", bottom: "-9%" }],
  },
  {
    id: "storage",
    title: "انبارداری و سردخانه گمرکی",
    lettering: "Storage",
    description: "ارس، بازرگان، بندرعباس، محاسبه ظرفیت بر مبنای کامیون، برآورد متناسب با نوع کالا",
    artwork: [{ image: storage, width: "60%", left: "20%", bottom: "-5%" }],
  },
  {
    id: "orders",
    title: "ثبت سفارش و امور ارزی",
    lettering: "Orders",
    description: "ثبت سفارش متناسب با کالا، تأمین ارز، حواله، خدمات بانکی و پیگیری فرایند",
    artwork: [{ image: orders, width: "62%", left: "19%", bottom: "-10%" }],
  },
];
