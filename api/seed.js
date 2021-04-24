const db = require("./couchbase");

const seed = async () => {
  const categories = [
    {
      id: "1",
      icon: "/icon.png",
      title: "Questions sur l'utilisation d'Affixe",
    },
    {
      id: "2",
      icon: "/icon2.png",
      title: "Bon à savoir sur Affixe",
    },
    {
      id: "3",
      icon: "/icon3.png",
      title: "Généralités / Autres / Divers / Vrac",
    },
  ];

  const articles = [
    {
      id: "1",
      title: "Comment créer une commande libre ?",
      body: `
      <div>
      <div>
        <div>utilisation*</div>
        <div>Passer par le menu Paramétrages</div>
        <div>- Commun </div>
        <div>-Utilisateur, Renseignez dans un premier temps les champs suivi d'un astérix rouge.</div>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
    </div>
      `,
      updated_at: "12-02-2021",
    },
    {
      id: "2",
      title: "Comment créer un utilisateur ?",
      body: `
      <div>
        <p>
          Bien sur, il vous suffit de vous rendre sur votre avenant actif et de cliquer sur le bouton 'nouvel avenant'.
          C'est sur ce nouvel avenant que la modification du bailleur sera possible.
        </p>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
          <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        </div>
      </div>
      `,
      updated_at: "10-03-2021",
    },
    {
      id: "3",
      title:
        "Peut-on changer de bailleur tout en gardant les informations du bail?",
      body: `
      <div>
      <p>
        Il suffit de passer par le menu Patrimoine / Panneau/Face / Cartographie. Vous appliquez un certain nombre de filtre selon votre désir, vous sélectionnez vos faces puis, dans l'onglet cartographie, vous cliquez sur 'Afficher la carte.
      </p>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
    </div>
      `,
      updated_at: "20-03-2021",
    },
    {
      id: "4",
      title: "Comment crée t-on un avoir partiel ?",
      body: `
      <div>
        <p>
          l vous suffit de vous rendre sur votre facture qui doit-être éditée.
          De là, vous avez un onglet <strong>'avoir'</strong>, il vous suffit de vous y rendre et de cliquer sur le bouton '+'.
        </p>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
          <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        </div>
      </div>
      `,
      updated_at: "22-03-2021",
    },
    {
      id: "5",
      title: "Comment ajouter une ville d'un autre pays ?",
      body: `
      <div>
        <div>
          <div>De la même manière que l'ajout d'une commune en France, passer par le menu Paramétrages
          </div>
          <div>- Commun</div>
          <div>- Commune et sur la droite de l'écran se trouvera un encart pour ajouter une commune en spécifiant le pays.
          </div>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
          <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        </div>
      </div>
      `,
      updated_at: "01-04-2021",
    },
    {
      id: "6",
      title: "Comment créer une échéance de paiement ?",
      body: `
      <div>
        <div>
          <div>La meilleure façon de procèder est de clotûrer cette commande à la date de fin de la dernière échéance payée, ce qui va automatiquement supprimer les dernières échéances non facturées et changer la date de fin de votre commande.
          </div>
          <div>
            Ensuite, comme votre commande est passée à l'état<span style={{fontWeight: 'bold'}}> 'Clos'</span> et donc<span style={{fontWeight: 'bold'}}> 'Non renouvellé'</span>, vous devrez recréer un nouveau bon de commande en passant par Gest. Com. LC
          </div>
          <div>- Commande LC</div>
          <div>- Création.</div>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
          <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        </div>
      </div>
      `,
      updated_at: "10-04-2021",
    },
    {
      id: "7",
      title: "Comment créer un acompte sur une commande LC ?",
      body: `
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      `,
      updated_at: "14-04-2021",
    },
    {
      id: "8",
      title: "Comment changer le nombre de face de mon matériel ?",
      body: `
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      `,
      updated_at: "17-04-2021",
    },
    {
      id: "9",
      title:
        "Comment ajouter des frais techniques sur ma commande LC facturée ?",
      body: `
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      `,
      updated_at: "20-04-2021",
    },
    {
      id: "10",
      title: "Comment faire un avoir sur des frais techniques ?",
      body: `
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>
        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      `,
      updated_at: "22-04-2021",
    },
  ];

  const categories_to_articles = [
    {
      id: "1",
      article_id: "1",
      category_id: "1",
    },

    {
      id: "2",
      article_id: "1",
      category_id: "2",
    },

    {
      id: "3",
      article_id: "1",
      category_id: "3",
    },

    {
      id: "4",
      article_id: "2",
      category_id: "1",
    },

    {
      id: "5",
      article_id: "2",
      category_id: "2",
    },

    {
      id: "6",
      article_id: "3",
      category_id: "3",
    },
    {
      id: "7",
      article_id: "3",
      category_id: "1",
    },

    {
      id: "8",
      article_id: "4",
      category_id: "1",
    },
    {
      id: "9",
      article_id: "4",
      category_id: "3",
    },

    {
      id: "10",
      article_id: "5",
      category_id: "1",
    },
    {
      id: "11",
      article_id: "5",
      category_id: "2",
    },
    {
      id: "12",
      article_id: "6",
      category_id: "3",
    },
    {
      id: "13",
      article_id: "7",
      category_id: "2",
    },
    {
      id: "14",
      article_id: "8",
      category_id: "1",
    },
    {
      id: "15",
      article_id: "8",
      category_id: "3",
    },
    {
      id: "16",
      article_id: "9",
      category_id: "3",
    },
    {
      id: "17",
      article_id: "9",
      category_id: "2",
    },
    {
      id: "18",
      article_id: "10",
      category_id: "1",
    },
    {
      id: "19",
      article_id: "10",
      category_id: "2",
    },
    {
      id: "20",
      article_id: "10",
      category_id: "3",
    },
  ];

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    await db.bucket.collection("categories").insert(category.id, category);
  }

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    await db.bucket.collection("articles").insert(article.id, article);
  }

  for (let i = 0; i < categories_to_articles.length; i++) {
    const category_to_article = categories_to_articles[i];
    await db.bucket
      .collection("categories_to_articles")
      .insert(category_to_article.id, category_to_article);
  }

  // indexing

  const indexes = [
    "CREATE INDEX ix_category_id ON faqdb._default.categories(id);",
    "CREATE INDEX ix_category_title ON faqdb._default.categories(title);",

    "CREATE INDEX ix_article_id ON faqdb._default.articles(id);",
    "CREATE INDEX ix_article_title ON faqdb._default.articles(title);",
    "CREATE INDEX ix_article_body ON faqdb._default.articles(body);",

    "CREATE INDEX ix_categories_to_articles_id ON faqdb._default.categories_to_articles(id);",
    "CREATE INDEX ix_categories_to_articles_article_id ON faqdb._default.categories_to_articles(article_id);",
    "CREATE INDEX ix_categories_to_articles_category_id ON faqdb._default.categories_to_articles(category_id);",
  ];

  for (let i = 0; i < indexes.length; i++) {
    const qs = indexes[i];
    await db.cluster.query(qs);
  }

  console.log("done");
};

seed();
