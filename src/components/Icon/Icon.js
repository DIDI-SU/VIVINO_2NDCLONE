import money1 from '../../assets/Icon/money1.svg';
import money2 from '../../assets/Icon/money2.svg';
import money3 from '../../assets/Icon/money3.svg';
import money4 from '../../assets/Icon/money4.svg';

const ICON = [
  { id: 1, src: money1 },
  { id: 2, src: money2 },
  { id: 3, src: money3 },
  { id: 4, src: money4 },
];

const ICON_MAP = new Map(ICON.map(item => [item.id, item.src]));

export default ICON_MAP;
