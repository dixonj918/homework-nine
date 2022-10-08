var MODEL = (function(){
    var _nflContent = `      <div class="league-logo">
    <img
      src="https://content.sportslogos.net/logos/7/1007/full/dwuw5lojnwsj12vfe0hfa6z47.gif"
      alt="NFl logo"
    />
    <div class="league-name"><h1>National Football League</h1></div>
  </div>
  <div class="leagueHero">
    <img
      src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0920%2Fr1064395_1296x518_5%2D2.jpg&w=660&h=264&scale=crop&cquality=80&location=center&format=jpg"
      alt=""
    />
    <div class="heroText">
      <h1>Top News</h1>
      <h4>AFC</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem quam, porro veritatis recusandae velit fuga corporis
        consectetur rem quaerat ipsam perferendis quidem neque facere, id
        ipsa esse aperiam ab tempora!
      </p>
    </div>
  </div>`;
    var _nbaContent = `<div class="league-logo">
    <img
      src="https://content.sportslogos.net/logos/6/982/full/8147__national_basketball_association-primary-2018.png"
      alt="NBA logo"
    />
    <div class="league-name"><h1>National Basketball Association</h1></div>
  </div>
  <div class="leagueHero">
    <img
      src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1005%2Fnba_clippers%2D5%2Dquestions_5x2.jpg&w=660&h=264&scale=crop&cquality=80&location=center&format=jpg"
      alt="Clippers"
    />
    <div class="heroText">
      <h1>Top News</h1>
      <h4>Eastern Conference</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem quam, porro veritatis recusandae velit fuga corporis
        consectetur rem quaerat ipsam perferendis quidem neque facere, id
        ipsa esse aperiam ab tempora!
      </p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem quam, porro veritatis recusandae velit fuga corporis
        consectetur rem quaerat ipsam perferendis quidem neque facere, id
        ipsa esse aperiam ab tempora!
    </div>
  </div>`;
    var _mlbContent = `<div class="league-logo">
    <img
      src="https://content.sportslogos.net/logos/4/490/full/4227__major_league_baseball-primary-2019.png"
      alt="MLB Logo"
    />
    <div class="league-name"><h1>Major League Baseball</h1></div>
  </div>
  <div class="leagueHero">
    <img
      src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1007%2Fr1072398_1296x518_5%2D2.jpg&w=628&h=251&scale=crop&cquality=80&location=center&format=jpg"
      alt="Tampa Rays"
    />
    <div class="heroText">
      <h1>Top News</h1>
      <h4>Wild Card Weekend</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem quam, porro veritatis recusandae velit fuga corporis
        consectetur rem quaerat ipsam perferendis quidem neque facere, id
        ipsa esse aperiam ab tempora!
      </p>
    </div>
  </div>`;
    var _nhlContent = `<div class="league-logo">
    <img
      src="https://content.sportslogos.net/leagues/thumbs/1.gif"
      alt="NHL Logo"
    />
    <div class="league-name"><h1>National Hockey League</h1></div>
  </div>
  <div class="leagueHero">
    <img
      src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0627%2Fr1029323_1296x518_5%2D2.jpg&w=660&h=264&scale=crop&cquality=80&location=center&format=jpg"
      alt="NHL Champs"
    />
    <div class="heroText">
      <h1>Top News</h1>
      <h4>Free Agency</h4>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Exercitationem quam, porro veritatis recusandae velit fuga corporis
      consectetur rem quaerat ipsam perferendis quidem neque facere, id
      ipsa esse aperiam ab tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Exercitationem quam, porro veritatis recusandae velit fuga corporis
      consectetur rem quaerat ipsam perferendis quidem neque facere, id
      ipsa esse aperiam ab tempora!
      </p>
    </div>
  </div>`;

var _updateView = function(pageName){
console.log("Model" + pageName);
var pageContent = "_" + pageName;
$(".app").html(eval(pageContent));
    };
var _myName = "James";


return{
    updateView: _updateView,
};

})();