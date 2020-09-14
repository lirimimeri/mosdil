import React, { Component } from "react";

import classes from "./News.module.css";

class News extends Component {
  render() {
    return (
      <div className={classes.News}>
        <div>
          <h2>Cka janë Coronaviruset</h2>
          <p>
            Koronaviruset janë familja e viruseve të cilat shkaktojnë sëmundje
            nga një rrufë e lehtë deri në sëmundje më të rënda si Sindroma
            Respiratore e Lindjes së Mesme (Middle East Respiratory Syndrome
            MERS) dhe Sindroma e Rëndë Respiratore Akute (Severe Acute
            Respiratory Syndrome SARS).
          </p>
        </div>

        <div>
          <h2>
            Cilat janë simptomat e një personi të infektuar me koronavirus?
          </h2>
          <p>
            Simptomat varen nga virusi, por shenjat e zakonshme përfshijnë
            simptomat e aparatit të frymëmarrjes: ethe, kollë, gulçim dhe
            vështirësi në frymëmarrje. Në raste më të rënda, infeksioni mund të
            shkaktojë pneumoni, sindromë të rëndë respiratore akute,
            insuficiencë të veshkave, madje edhe vdekje. Kur një sëmundje është
            e re, nuk ka vaksinë për të, dhe mund të duhen disa vite derisa të
            prodhohet një vaksinë e re.
          </p>
        </div>

        <div>
          <h2>
            A mund të infektohen njerëzit me koronavirusin e ri ku si burim
            infektimi janë kafshët?
          </h2>
          <p>
            Hetimet e hollësishme në Kinë në vitin 2002 kanë zbuluar se SARS-CoV
            u transmetua nga macet te njerëzit, kurse në Arabinë Saudite në
            vitin 2012 u zbulua MERS-CoV nga devetë te njerëzit. Njihen disa
            koronaviruse të cilët po qarkullojnë në kafshë, por që akoma nuk
            kanë infektuar njerëzit. Ndërkohë që survejanca në të gjithë botën
            përmirësohet, ka të ngjarë që të identifikohen më shumë
            koronaviruse.
          </p>
        </div>
      </div>
    );
  }
}

export default News;
