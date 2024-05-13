import React from 'react'
import './TnCstyles.css'
import { Link } from 'react-router-dom'


function TnCcard() {
  return (
    <div className="card1">
        <h1 className="heading1">TERMS & CONDITIONS</h1>
        <p className="p12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl
          libero, accumsan at nisl a, suscipit dapibus nulla. Nulla eu nisl eu
          ex dictum maximus tempus at lectus. In scelerisque rutrum nisl. In
          pharetra eu lectus vitae lobortis. Quisque aliquet tempor lacus, sit
          amet facilisis ante. Nulla sollicitudin, dolor vel hendrerit
          malesuada, sem ex dapibus turpis, sed convallis magna dolor vel massa.
          Donec sollicitudin purus at enim gravida, vitae dictum nibh porta.
          Fusce pellentesque sem elit, eget convallis nunc egestas eu. Sed
          tincidunt fermentum aliquet. Fusce at magna eu eros dignissim
          pellentesque. Nullam ullamcorper sagittis libero fermentum congue.
          <br />
          <br />
          Nam tristique sollicitudin posuere. Donec ac venenatis mauris. Aenean
          id ante varius erat interdum bibendum sed eu ipsum. Nulla mattis,
          lacus ut pharetra volutpat, est lectus porta neque, sollicitudin
          fringilla magna ante eu mi. Duis in risus justo. Maecenas ac consequat
          est, ut eleifend erat. Proin cursus sem in mi fermentum, et rutrum
          diam porta. Aliquam consequat ultricies eros et consectetur. Integer
          molestie ex non nisl pretium, at commodo dolor ornare. Vivamus porta
          ante sed auctor feugiat. Aliquam elementum dignissim felis, sit amet
          varius dui. Ut vel tempor libero. Morbi ligula lacus, fermentum vel
          leo eget, interdum mattis mi. Duis aliquam enim nec nisi dapibus
          porta.
          <br />
          <br />
          Aliquam venenatis mattis pharetra. Praesent tempor elementum viverra.
          Phasellus laoreet felis a justo consectetur, id eleifend sapien
          commodo. Nunc vestibulum arcu lacus, sed interdum magna tempus id.
          Quisque gravida lectus eget ultrices elementum. Vivamus vitae tortor
          vel dui lacinia porttitor vitae sit amet est. Cras a est in urna
          cursus auctor. Nunc condimentum ut elit congue molestie.
          <br />
          <br />
          Nam feugiat tempor rhoncus. Cras non vehicula arcu. Integer in odio
          sodales, luctus sem nec, rutrum velit. Pellentesque cursus metus eu
          ipsum vestibulum, sit amet efficitur mauris vehicula. Duis massa
          lectus, porta id facilisis nec, volutpat vitae sapien.{" "}
        </p>
        <Link to="/"><button className="btn111">OKAY</button></Link>
      </div>
  );
}

/*
const TnCcard = ({ title, children }) => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 900,
        height: '800px',
        margin: 'auto',
        marginTop: 2,
        justifyContent:'center',
        alignItems:'center',
        background: 'rgba(21, 25, 47, 0.72)',
        borderRadius: 6,
        border: '1px solid black',
        backdropFilter: 'blur(12px)',
        color: 'white',
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h4" gutterBottom>
          {title}
        </Typography>
        {children}
      </CardContent>
      <div style={{ width: 172, height: 49,marginTop:'160px', background: '#EA9022', borderRadius: 20, display: 'inline-block', textAlign: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', lineHeight: '49px' }}>
          I Agree
        </Link>
      </div>    </Card>
  );
};*/

export default TnCcard;
