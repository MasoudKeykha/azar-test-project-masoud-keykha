const storiesPath = "/assets/home/hero/stories";

export const stories = [
  { label: "خودروهای سواری", image: `${storiesPath}/story-09.png` },
  { label: "کشنده", image: `${storiesPath}/story-08.jpg` },
  { label: "بازرسی مبدأ", image: `${storiesPath}/story-07.jpg` },
  { label: "بارگیری", image: `${storiesPath}/story-06.jpg` },
  { label: "حمل از چین", image: `${storiesPath}/story-05.jpg` },
  { label: "ترانزیت", image: `${storiesPath}/story-04.jpg` },
  { label: "انبار", image: `${storiesPath}/story-03.jpg` },
  { label: "تأمین ارز", image: `${storiesPath}/story-02.jpg` },
  { label: "ترخیص کالا", image: `${storiesPath}/story-01.jpg` },
];

const vehicleTags = ["خرید", "سفارش خاص", "حمل و نقل", "ترانزیت"];

export const slides = [
  {
    label: "امور گمرکی",
    eyebrow: "انجام کلیه امور گمرکی",
    title: ["بازرگانی اصولی شجاعی"],
    tags: ["حمل", "ترخیص", "انبارداری", "ثبت سفارش"],
    description: "هر قدم با یک کارشناس هماهنگ‌کننده و برآورد آنلاین همان لحظه",
    image: "/assets/home/hero/customs.webp",
  },
  {
    label: "خودرو",
    eyebrow: "خودروهای صفر و کارکرده موجود",
    title: ["قیمت روز به دلار،", "پلاک ارس و ماکو"],
    tags: vehicleTags,
    description: "خرید از موجودی یا سفارش خودروی خاص از دبی، پیش‌فاکتور، قرارداد، ترخیص و تحویل",
    image: "/assets/home/hero/main.jpg",
  },
  {
    label: "کشنده",
    eyebrow: "کشنده‌های وارداتی از اروپا و ترکیه",
    title: ["ثبت سفارش با اسقاط،", "ترخیص و پلاک"],
    tags: vehicleTags,
    description: "کشنده‌های موجود با وضعیت گمرکی و قیمت یورو، یا سفارش کشنده خاص با مشخصات دلخواه",
    image: "/assets/home/weblog/article-03.png",
  },
  {
    label: "حمل بین‌الملل",
    eyebrow: "حمل دریایی، زمینی و ریلی بار کامل",
    title: ["از چین، ترکیه و", "اروپا تا گمرک مقصد"],
    tags: ["بین‌المللی", "داخلی", "دریایی", "ریلی"],
    description: "محاسبه خودکار تعداد کانتینر یا تریلی بر اساس وزن و حجم، همراه بیمه و اسناد حمل",
    image: "/assets/home/hero/freight.webp",
  },
];

export const initialSlide = 1;
