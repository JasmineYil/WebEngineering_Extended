import React from 'react';
import Comments from './Comments';
import MoreBears from './MoreBears';

const Article: React.FC = () => (
  <article>
    <h2>The trouble with Bears</h2>
    <p className="author">By Evan Wild</p>
    <p className="content">
      Tall, lumbering, angry, dangerous. The real live bears of this world are
      proud, independent creatures, self-serving and always on the hunt for
      food. Nothing like the bears you see on TV, like Baloo from renowned
      documentary, The Jungle Book.
    </p>
    <p className="content">
      So what are bears really like, and why does the world's media portray them
      with such a skewed vision? In this article we try to answer those
      questions, and give you a real insight into the life of the bear.
    </p>
    <h3>Types of bear</h3>
    <p className="content">
      Bears come in two varieties — large and medium. You don't get small bears.
      If you have seen a small bear, then it was in fact probably a baby bear
      (cub) from another species.
    </p>
    <p className="content">
      Bears can also be classified in terms of their habitat — both large and
      medium bears are just as at home in urban areas as they are in the
      countryside. Different habitats encourage different behaviour however, as
      you'll find out below. The below table also gives you some useful facts
      about bears.
    </p>
    <br />
    <br />
    <table>
      <caption>
        Types of bears, including their coat, size, habitat, lifespan, and diet.
        This table provides a comparison of wild and urban bears.
      </caption>
      <thead>
        <tr>
          <th scope="col">Bear Type</th>
          <th scope="col">Coat</th>
          <th scope="col">Adult Size</th>
          <th scope="col">Habitat</th>
          <th scope="col">Lifespan</th>
          <th scope="col">Diet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Wild</th>
          <td>Brown or black</td>
          <td>1.4 to 2.8 meters</td>
          <td>Woods and forests</td>
          <td>25 to 28 years</td>
          <td>Fish, meat, plants</td>
        </tr>
        <tr>
          <th scope="row">Urban</th>
          <td>North Face</td>
          <td>18 to 22</td>
          <td>Condos and coffee shops</td>
          <td>20 to 32 years</td>
          <td>Starbucks, sushi</td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />

    <h3>Habitats and Eating habits</h3>
    <p className="content">
      Wild bears eat a variety of meat, fish, fruit, nuts, and other naturally
      growing ingredients. In general, they will hunt for food themselves in
      woodland or rivers, but at a push, they will track down their sustenance
      from farms or country houses. They tend to live in relative isolation, in
      caves, tents, or cottages.
    </p>
    <img src="media/wild-bear.jpg" />
    <p className="content">
      Urban (gentrified) bears on the other hand have largely abandoned the old
      ways. They will hunt other urban creatures if necessary (including other
      predators like rats and foxes), but prefer to scavenge from readily
      available urban food outlets like dumpsters, bins, and fast food joints.
      When food has proven scarce, urban bears have even been known to break
      into people's kitchens and steal essentials like baked beans, ready meals,
      and microwave ovens.
    </p>
    <img src="media/urban-bear.jpg" />
    <p className="content">
      Urban bears will sleep anywhere they can, from bus shelters and parks, to
      the toilets in McDonalds, to their own apartment.
    </p>
    <h3>Mating rituals</h3>
    <p className="content">
      Bears are romantic creatures by nature, and will naturally look for a mate
      that they can spend the rest of their lives with. They will woo a
      potential suitor by making their dwelling look attractive — for example,
      with cave paintings or a bed of reeds in the case of a wild bear, and mood
      lighting and a Michael Bublé CD in the case of an urban bear.
    </p>
    <p className="content">
      The following audio clip contains a fact file providing more details about
      bear mating rituals, along with samples and quotes from experts.
    </p>
    <audio controls aria-describedby="audio-transcription">
      <source src="media/bear.mp3" type="audio/mp3" />
      <source src="media/bear.ogg" type="audio/ogg" />
      <p>
        It looks like your browser doesn't support HTML5 audio players. You can{' '}
        <a href="media/bear.mp3">download the audio file</a> instead.
      </p>
    </audio>

    <details id="audio-transcription">
      <summary className="transcription-header">
        Transcription of the audio
      </summary>
      <p className="transcription">
        This isn't really an audio fact file about bears, but it is an audio you
        can transcribe.
      </p>
    </details>

    <aside>
      <h3>About the author</h3>
      <p className="content">
        Evan Wild is an unemployed plumber from Doncaster, who has been really
        "in to" wildlife since childhood. He once went to Chester Zoo on
        holiday, but got ill after eating a doner kebab.
      </p>
      <p className="content">
        He has never seen a bear, but once read a Daily Mail article about them,
        and thinks they sound cool.
      </p>
    </aside>
    <Comments />
    <MoreBears />
  </article>
);

export default Article;
