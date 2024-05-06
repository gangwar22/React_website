import '../Home.css';
import vg from '../assets/2.webp';

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main className="main1">
          <h1 className="techstar">techStar</h1>
          <p className="solution">solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img className="img" src={vg} alt="Graphics" />
        <div className="div">
          <p className="p">
            we are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to
            increase the
            problem-solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div className="home3_div">
          <h1 className="home3_h1">Who we are ?</h1>
          <p className="home3_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sapiente minus voluptatibus, saepe impedit porro facilis quod cum nam minima libero autem quasi quibusdam eos nisi velit architecto explicabo repudiandae.
            Nobis aliquam rerum voluptatibus quam perferendis est voluptatum unde repellat enim, blanditiis neque commodi ullam libero autem perspiciatis minima velit id reiciendis cum odio dolorum tempora adipisci quod voluptate? Asperiores.
            Facilis, suscipit? Aperiam placeat aliquam sint reiciendis numquam rem laboriosam ipsam minima. Commodi, autem laudantium. Suscipit, praesentium, tenetur architecto dignissimos, voluptatum temporibus odit dolores ratione totam cum rem pariatur natus.
            Laborum saepe accusamus quos illo blanditiis placeat, eveniet, consectetur suscipit illum adipisci voluptas. Repudiandae, hic facere. Itaque molestiae natus totam porro mollitia molestias, consequatur fugit ea incidunt repellendus, rerum aspernatur!
            Quidem id nam consequuntur ipsum recusandae asperiores quos, voluptates sint aperiam eius fugit ad consectetur, reiciendis, repudiandae natus minima molestiae molestias quas dignissimos dolorem animi rerum officia. Beatae, ea obcaecati?</p>
        </div>
      </div>
    </>
  );
}

export default Home;
