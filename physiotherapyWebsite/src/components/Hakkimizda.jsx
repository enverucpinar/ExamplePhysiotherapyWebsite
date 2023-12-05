import React from "react";

function Hakkimizda() {
  return (
    <div style={{ paddingInline: "100px" }}>
      <div
        className="row my-5"
        style={{ minHeight: "80vh", marginTop: "100px" }}
      >
        <div className="col-md-7">
          <h4
            className="text-start"
            style={{ color: "orange", fontSize: "35px" }}
          >
            HAKKIMIZDA
          </h4>
          <h5 className="text-start mt-3">Neden Biz?</h5>
          <p className="text-start mt-3" style={{ fontSize: "20px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            aliquam possimus repellat cumque, expedita aliquid sed aspernatur
            itaque molestias inventore dicta illo, molestiae asperiores alias
            consectetur eveniet! Modi provident, vitae iusto omnis illo quidem
            Laudantium at blanditiis, modi error ea sit nulla provident beatae
            quia fugiat earum aut dolor vitae! Veritatis ipsum officia esse,
            voluptas, animi soluta deleniti tenetur possimus ipsam tempore
            provident eaque dolor explicabo porro beatae placeat ea praesentium
            impedit voluptatibus blanditiis, a est distinctio. Exercitationem
            ratione quas, velit aliquid adipisci, hic tenetur voluptatibus cum
            aliquam consectetur odio quidem dignissimos! Minima obcaecati aut
            pariatur quam ratione quod molestiae labore quos eligendi rerum
            quibusdam voluptas facere ex, saepe aliquam veniam temporibus,
            inventore nam? Iusto sapiente obcaecati quisquam eum odio impedit
            explicabo incidunt modi! Sint nesciunt, minima animi doloribus
            repellendus rem ex, quasi architecto saepe placeat, blanditiis in
            officiis quod consectetur eum! Nihil atque, excepturi eaque, sit
            nobis non eum eius rem fugit quo distinctio odio laboriosam, quia
            officiis dolor architecto cum aperiam beatae numquam dolores at
            quidem velit optio. Perferendis aspernatur commodi error, dolore
            sapiente ullam consectetur repudiandae!
          </p>
          <p className="text-start" style={{ fontSize: "30px" }}>
            <span style={{ borderBottom: "2px solid orange" }}>
              ‘’Kliniğimizde neler yapıyoruz, uzmanlarımız kim ve ne iş yapıyor,
              bu teknikler benim sağlık sorunlarıma etkili oluyor mu?’’ Tüm bu
              sorular hakkında bilgi bulacaksınız.
            </span>
          </p>
        </div>
        <div className="col-md-5">
          <img
            src="https://st.depositphotos.com/1518767/1399/i/450/depositphotos_13993998-stock-photo-peaceful-woman-having-a-painful.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        className="row"
        style={{
          padding: "50px 0 50px",
          border: "1px solid",
          borderRadius: "20px",
          boxShadow: "0px 2px 18px 0px rgba(0,0,0,0.3)",
          backgroundColor: "#F9F2EC",
        }}
      >
        <div className="col-md-6">
          <img
            style={{ borderRadius: "15px" }}
            src="https://ulasakdogan.com/wp-content/uploads/2023/04/ulas-akdogan-tedavi-yontemleri.webp"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h3>Neden Biz?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab at
            unde provident aut facilis corporis laborum voluptates veritatis
            quam, facere autem. Ad neque quis quod exercitationem, vel
            temporibus. Temporibus.
          </p>
        </div>
      </div>
      <div className=" d-flex justify-content-md-evenly ekip mt-5">
        <div>
          <img
            style={{ maxHeight: "80%", borderRadius: "30%" }}
            src="https://imgrosetta.mynet.com.tr/file/12855416/12855416-728xauto.jpg"
            alt=""
          />
        </div>

        <div>
          <h3
            className="text-start"
            style={{ fontSize: "50px", paddingLeft: "50px" }}
          >
            Ekip Üyelerimiz
          </h3>
          <p className="text-start mt-5" style={{ fontSize: "30px" }}>
            Hastalarımızın sağlıklı bir yaşam tarzına yönelik doğru
            bilgilendirme ve eğitimi de sağlamaktadır. Bu sayede, hastalarımızın
            tedavilerinin ardından da sağlıklı bir yaşam sürdürmelerine destek
            olmaktadırlar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;
