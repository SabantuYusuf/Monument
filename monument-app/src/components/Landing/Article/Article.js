import React from 'react';

import article1 from '../../../images/article_1.jpg';
import article2 from '../../../images/article_2.jpg';
import article3 from '../../../images/article_3.jpg';

function Article() {
    return (
        <div className="grid-wrapper article">
            <article className="col-third">
                <img src={article1} alt="" />
                {/* <input type="text" placeholder="subject" className="col-third"/> */}
                <div>
                    <h3>ISSUE TWENTY &mdash; THE SOUTHWEST</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.</p>
                    <button>READ MORE</button>
                </div>
            </article>
            <article className="col-third">
                <img src={article2} alt="" />
                {/* <input type="text" placeholder="subject" className="col-third"/> */}
                <div>
                    <h3>ISSUE NINETEEN &mdash;  CAMPING</h3>
                    <p>Maiores qui doloremque suscipit molestias. Saepe omnis dolore, ipsum voluptatem quisquam eveniet repellat! Eius in vero, cum dolorem ad earum, dignissimos quasi qui obcaecati, minima, esse aliquid beatae. Placeat, adipisci temporibus suscipit neque assumenda earum perferendis autem voluptatem nostrum ipsa porro, voluptas cumque ullam et reiciendis deserunt eos aspernatur esse laudantium cum natus cupiditate nesciunt. Nostrum doloremque odio maiores, quis architecto vero unde error, obcaecati ullam esse soluta et incidunt. Totam quaerat unde doloribus inventore sapiente molestiae, rem? Dolor, est.</p>
                    <button>READ MORE</button>
                </div>
            </article>
            <article className="col-third">
                <img src={article3} alt="" />
                {/* <input type="text" placeholder="subject" className="col-third"/> */}
                <div>
                    <h3>ISSUE EIGHTEEN &mdash; FOOD</h3>
                    <p>Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?</p>
                    <button>READ MORE</button>
                </div>
            </article>
        </div>
    );
};

export default Article;