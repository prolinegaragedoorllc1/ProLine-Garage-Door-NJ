import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Award, 
  Wrench,
  Home as HomeIcon,
  Building2,
  Settings,
  CheckCircle2,
  Star
} from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('תודה! ניצור איתך קשר בהקדם');
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      service: '',
      details: ''
    });
  };

  const services = [
    {
      icon: HomeIcon,
      title: 'דלתות גראז׳ למגורים',
      description: 'התקנה ותיקון דלתות גראז׳ לבתים פרטיים',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop'
    },
    {
      icon: Building2,
      title: 'דלתות גראז׳ מסחריות',
      description: 'פתרונות דלתות גראז׳ לעסקים ומבנים תעשייתיים',
      image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&auto=format&fit=crop'
    },
    {
      icon: Wrench,
      title: 'החלפת קפיצים שבורים',
      description: 'תיקון והחלפה מהירה של קפיצי דלתות גראז׳',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop'
    },
    {
      icon: Settings,
      title: 'תיקון והתקנת מנועים',
      description: 'שירותי תיקון והתקנת מנועי פתיחה חשמליים',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop'
    },
    {
      icon: Shield,
      title: 'תחזוקה ואחזקה שוטפת',
      description: 'שירותי תחזוקה מונעת לדלתות גראז׳',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop'
    },
    {
      icon: Award,
      title: 'שירות חירום 24/7',
      description: 'זמינות מלאה לתיקונים דחופים',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop'
    }
  ];

  const reasons = [
    {
      icon: Award,
      title: 'מחירים תחרותיים',
      description: 'מחירים הוגנים ושקופים עם שירות איכותי'
    },
    {
      icon: Shield,
      title: 'מורשים ומבוטחים',
      description: 'צוות מקצועי עם כל האישורים והביטוחים הנדרשים'
    },
    {
      icon: CheckCircle2,
      title: 'שירות מהיר',
      description: 'רוב התיקונים מבוצעים באותו היום'
    },
    {
      icon: Star,
      title: 'איכות מובטחת',
      description: 'אחריות מלאה על כל העבודות והחומרים'
    }
  ];

  const reviews = [
    {
      name: 'דוד כהן',
      rating: 5,
      text: 'שירות מעולה! הגיעו תוך שעה ותיקנו את הדלת במקום. מקצועיים וידידותיים.'
    },
    {
      name: 'שרה לוי',
      rating: 5,
      text: 'המחירים הכי טובים שמצאתי באזור. העבודה בוצעה בצורה מושלמת ומהירה.'
    },
    {
      name: 'מיכאל אברהם',
      rating: 5,
      text: 'ממליץ בחום! התקינו לי דלת גראז׳ חדשה והכל עבד מצוין. תודה רבה!'
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <HomeIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">גראז׳ דור</h1>
              <p className="text-xs text-slate-300">ניו ג׳רזי</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">התקשר עכשיו</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            שירותי תיקון והתקנת דלתות גראז׳
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-slate-200">
            שירות מקצועי ומהיר בכל ניו ג׳רזי
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 gap-2"
            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
          >
            <Phone className="w-5 h-5" />
            קבל הצעת מחיר חינם
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gradient-to-b from-slate-100 to-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-center mb-2">קבל הצעת מחיר חינם</h3>
              <p className="text-center text-slate-600 mb-8">
                מלא את הפרטים ונחזור אליך בהקדם האפשרי
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="שם פרטי"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                    className="text-right"
                  />
                  <Input
                    placeholder="שם משפחה"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                    className="text-right"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="טלפון"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="text-right"
                  />
                  <Input
                    type="email"
                    placeholder="אימייל"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="text-right"
                  />
                </div>
                <select
                  className="w-full p-3 border rounded-md text-right"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  required
                >
                  <option value="">בחר שירות</option>
                  <option value="repair">תיקון דלת גראז׳</option>
                  <option value="spring">החלפת קפיצים</option>
                  <option value="motor">תיקון/התקנת מנוע</option>
                  <option value="panel">החלפת פאנלים</option>
                  <option value="maintenance">תחזוקה</option>
                  <option value="installation">התקנת דלת חדשה</option>
                  <option value="other">אחר</option>
                </select>
                <Textarea
                  placeholder="פרטי הפרויקט"
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  rows={4}
                  className="text-right"
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  שלח בקשה
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">השירותים שלנו</h3>
            <p className="text-slate-600 text-lg">פתרונות מקצועיים לכל צורך</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 right-4 bg-blue-600 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">למה לבחור בנו?</h3>
            <p className="text-slate-600 text-lg">הסיבות שהופכות אותנו למובילים בתחום</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                  <p className="text-slate-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-xl text-blue-100">לקוחות מרוצים</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-xl text-blue-100">תיקונים שבוצעו</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-xl text-blue-100">זמינות</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">מה הלקוחות שלנו אומרים</h3>
            <p className="text-slate-600 text-lg">ביקורות אמיתיות מלקוחות מרוצים</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{review.text}</p>
                  <p className="font-bold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">גראז׳ דור</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                אנחנו מתמחים בתיקון והתקנה של דלתות גראז׳ למגורים ועסקים בכל רחבי ניו ג׳רזי. 
                שירות מקצועי, מהיר ואמין.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">יצירת קשר</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">(732) 555-1234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">info@garagedoor-nj.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">ניו ג׳רזי, ארה״ב</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">24/7 - זמינים תמיד</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">השירותים שלנו</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• תיקון דלתות גראז׳</li>
                <li>• החלפת קפיצים</li>
                <li>• תיקון והתקנת מנועים</li>
                <li>• התקנת דלתות חדשות</li>
                <li>• תחזוקה שוטפת</li>
                <li>• שירות חירום 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© 2024 גראז׳ דור - כל הזכויות שמורות</p>
          </div>
        </div>
      </footer>
    </div>
  );
}