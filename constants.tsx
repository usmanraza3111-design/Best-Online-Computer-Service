
import React from 'react';
import { FileText, Monitor, PenTool, Type, Printer, ShieldCheck } from 'lucide-react';
import { Service, NavLink } from './types';

export const BUSINESS_NAME = "Tajammal Computer & Graphics Services";
export const PHONE_NUMBER = "0301-5768262";
export const WHATSAPP_LINK = "https://wa.me/923015768262";
export const ADDRESS = "Chak No. 31/11-L, Tehsil Chichawatni, District Sahiwal, Pakistan";

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'cv-making',
    title: 'CV / Resume Making',
    description: 'Professional CV and Resume design tailored to help you land your dream job. Modern templates and ATS-friendly layouts.',
    icon: <FileText className="w-8 h-8" />
  },
  {
    id: 'ms-office',
    title: 'MS Office Work',
    description: 'Expertise in MS Word, Excel, and PowerPoint. Formatting, data entry, reports, and professional presentations.',
    icon: <Monitor className="w-8 h-8" />
  },
  {
    id: 'photoshop',
    title: 'Photoshop & Graphic Design',
    description: 'Creative design for banners, logos, social media posts, and photo editing using professional Adobe tools.',
    icon: <PenTool className="w-8 h-8" />
  },
  {
    id: 'typing',
    title: 'Typing (English & Urdu)',
    description: 'Fast and accurate typing services for both English and Urdu languages. Documents, thesis, and assignments.',
    icon: <Type className="w-8 h-8" />
  },
  {
    id: 'printing',
    title: 'Photocopy, Printing & Scanning',
    description: 'High-quality color/black & white printing, photocopying, and document scanning services.',
    icon: <Printer className="w-8 h-8" />
  },
  {
    id: 'reliability',
    title: 'Fast & Reliable Service',
    description: 'We pride ourselves on quick turnaround times without compromising on quality for local businesses and individuals.',
    icon: <ShieldCheck className="w-8 h-8" />
  }
];
