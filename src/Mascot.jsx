import React from 'react';
import { ArrowRight } from 'lucide-react';
import { site } from './data/siteContent';

export default function Mascot() {
  return <section className="mascot section" id="dorio">
    <div className="section-index"><span>CONHEÇA O NOSSO MASCOTE</span><span>O GUARDIÃO DA SPARTHA</span></div>
    <div className="mascot-layout">
      <div className="mascot-visual">
        {site.images.mascot ? <img src={site.images.mascot} alt="Dório, a tartaruga guerreira mascote da chapa Spartha" /> : <div className="mascot-monogram" aria-hidden="true">D<span>✦</span></div>}
        <span className="mascot-caption">MASCOTE OFICIAL · SPARTHA</span>
      </div>
      <div className="mascot-copy">
        <div className="kicker">LEALDADE · CORAGEM · UNIÃO</div>
        <h2>Conheça o <em>{site.mascot.name}.</em></h2>
        <h3>{site.mascot.title}</h3>
        <p>{site.mascot.description}</p><p>{site.mascot.values}</p>
        <blockquote>“{site.mascot.quote}”</blockquote>
        <a className="text-link" href="#integrantes">Conheça a equipe <ArrowRight size={16}/></a>
      </div>
    </div>
  </section>;
}
