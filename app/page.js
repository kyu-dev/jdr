import { supabase } from '@/lib/supabase';

export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabase.from('view').insert({
      name: 'arthur',
    });
    if (data) console.log(data);
    if (error) console.log(error);
  };

  setNewView();

  return <div>Hello</div>;
}
