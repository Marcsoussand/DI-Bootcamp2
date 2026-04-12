type Player = {
    name: string;
    clubName: string;
}

type Club = {
    clubName: string;
    city: string;
    country: string;
}


type PlayerWithClub = Player & Club;
type ClubWithPlayer = Club & Player;


let messi : PlayerWithClub = {
    name: "Lionel Messi",
    clubName: " Inter Miami",
    city: "Miami",
    country: "USA"
}

let interMiami : ClubWithPlayer = {
    clubName: "Inter Miami",
    city: "Miami",
    country: "USA",
    name: "Lionel Messi",
}

type alphanumeric = string | number;

function formatValue(a: alphanumeric): alphanumeric {
  if (typeof a === "number" ) {
    return `$${a.toFixed(2)}`;
  }

  if (typeof a === "string" ) {
    return a.toUpperCase();
  }

  throw new Error(
    "Unsupported type"
  );
}
