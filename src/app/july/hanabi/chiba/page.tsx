import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { chibaHanabiEvents, regionInfo, monthInfo } from '@/data/level5-july-chiba';

export default function ChibaJulyHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={chibaHanabiEvents}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  );
} 