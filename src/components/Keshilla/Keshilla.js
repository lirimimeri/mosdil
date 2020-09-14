import React from "react";
import classes from "./Keshilla.module.css";

const Keshilla = () => (
  <div className={classes.Keshilla}>
    <div>
      <i className="fas fa-hands-wash fa-3x"></i>
      <h3>
        1. Pastroni duart shpesh me ujë dhe sapun ose perdorni ndonjë dezinfektues
        me bazë të lartë të alkoolit.
      </h3>
    </div>
    <div>
      <i className="fas fa-head-side-mask fa-3x" />
      <h3>2. Mos dilni pa maskë dhe dorëza,shmangni prekjet e fytyrës me dorë.</h3>
    </div>

    <div>
      <i className="fas fa-house-user fa-3x" />
      <h3>
        3. Shmangni daljet e panevojshme! Të gjithë po qëndrojmë në shtëpi, edhe ti
        #rriNshpi !
      </h3>
    </div>

    <div>
      <i className="fas fa-people-arrows fa-3x"></i>
      <h3>4. Mbani distancën e nevojshme nga njëri-tjetri! </h3>
    </div>

    <div>
      <i className="fas fa-handshake-slash fa-3x"></i>
      <h3>
        5. Evitoni dorë-shtrëngimet! Provoni përshëndetjet tjera, është argëtuese!
      </h3>
    </div>

    <div>
      <i className="fas fa-head-side-cough-slash fa-3x"></i>
      <h3>
        6. Kujdes kur tështini ose kolliteni, mbulojeni gojen me mëngë ose pallomë.
      </h3>
    </div>
  </div>
);

export default Keshilla;
