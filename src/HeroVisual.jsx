import React from 'react';
import { HeartHandshake, Sparkles } from 'lucide-react';
import { site } from './data/siteContent';

export default function HeroVisual() {
  return <div className="hero-art hero-showcase">
    <div className="showcase-ring" aria-hidden="true" />
    <div className="showcase-image"><img src={site.images.mascotPortrait} alt="Dório, o guardião da Spartha, em seu emblema dourado" fetchPriority="high" /></div>
    <div className="floating-label label-top"><HeartHandshake size={22} aria-hidden="true" /><span>Uma escola para todos<strong>A força da nossa união.</strong></span></div>
    <a href="#dorio" className="floating-label label-bottom"><Sparkles size={22} aria-hidden="true" /><span>Conheça o nosso mascote<strong>Dório, o guardião →</strong></span></a>
    <span className="hero-vote">CHAPA <b>{site.number}</b></span>
  </div>;
}
