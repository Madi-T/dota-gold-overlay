interface FeedProps {
  title: string;
  // data: { events: Gold[] | Gpm[]; timestamp: string;};
  data: any;
}

type OverwolfEvent = Gold | Gpm;
interface Gold {
  name: 'gold';
  data: {gold: number; gold_reliable: number; gold_unreliable: number;};
}

interface Gpm {
  name: 'gpm';
  data: {gpm: number;};
}
interface FeedItemProps {
  content: string;
}