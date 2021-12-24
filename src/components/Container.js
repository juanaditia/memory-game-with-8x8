import { useState } from 'react';
import Card from './Card';
// import dataMemory from '../data';

function Container() {
  const [items, setItems] = useState(
    [
      { id: 1, icon: 'face', color: '#e2aa50', stat: '' },
      { id: 1, icon: 'face', color: '#e2aa50', stat: '' },
      { id: 2, icon: 'settings', color: '#e5707e', stat: '' },
      { id: 2, icon: 'settings', color: '#e5707e', stat: '' },
      { id: 3, icon: 'favorite', color: '#cd5d7d', stat: '' },
      { id: 3, icon: 'favorite', color: '#cd5d7d', stat: '' },
      { id: 4, icon: 'language', color: '#97bae7', stat: '' },
      { id: 4, icon: 'language', color: '#97bae7', stat: '' },
      { id: 5, icon: 'fingerprint', color: '#949cdf', stat: '' },
      { id: 5, icon: 'fingerprint', color: '#949cdf', stat: '' },
      { id: 6, icon: 'thumb_up', color: '#999b84', stat: '' },
      { id: 6, icon: 'thumb_up', color: '#999b84', stat: '' },
      { id: 7, icon: 'question_answer', color: '#d8ac9c', stat: '' },
      { id: 7, icon: 'question_answer', color: '#d8ac9c', stat: '' },
      { id: 8, icon: 'lightbulb', color: '#726a95', stat: '' },
      { id: 8, icon: 'lightbulb', color: '#726a95', stat: '' },

      { id: 9, icon: 'pets', color: '#709fb0', stat: '' },
      { id: 9, icon: 'pets', color: '#709fb0', stat: '' },
      { id: 10, icon: 'android', color: '#a0c1b8', stat: '' },
      { id: 10, icon: 'android', color: '#a0c1b8', stat: '' },
      { id: 11, icon: 'support', color: '', stat: '' },
      { id: 11, icon: 'support', color: '', stat: '' },
      { id: 12, icon: 'group_work', color: '', stat: '' },
      { id: 12, icon: 'group_work', color: '', stat: '' },
      { id: 13, icon: 'nightlight_round', color: '', stat: '' },
      { id: 13, icon: 'nightlight_round', color: '', stat: '' },
      { id: 14, icon: 'label_important', color: '', stat: '' },
      { id: 14, icon: 'label_important', color: '', stat: '' },
      { id: 15, icon: 'commute', color: '', stat: '' },
      { id: 15, icon: 'commute', color: '', stat: '' },
      { id: 16, icon: 'flight_land', color: '', stat: '' },
      { id: 16, icon: 'flight_land', color: '', stat: '' },

      { id: 17, icon: 'pregnant_woman', color: '', stat: '' },
      { id: 17, icon: 'pregnant_woman', color: '', stat: '' },
      { id: 18, icon: 'offline_pin', color: '', stat: '' },
      { id: 18, icon: 'offline_pin', color: '', stat: '' },
      { id: 19, icon: 'alarm_add', color: '', stat: '' },
      { id: 19, icon: 'alarm_add', color: '', stat: '' },
      { id: 20, icon: 'spellcheck', color: '', stat: '' },
      { id: 20, icon: 'spellcheck', color: '', stat: '' },
      { id: 21, icon: 'eject', color: '', stat: '' },
      { id: 21, icon: 'eject', color: '', stat: '' },
      { id: 22, icon: 'gif_box', color: '', stat: '' },
      { id: 22, icon: 'gif_box', color: '', stat: '' },
      { id: 23, icon: 'currency_exchange', color: '', stat: '' },
      { id: 23, icon: 'currency_exchange', color: '', stat: '' },
      { id: 24, icon: 'shopping_cart_checkout', color: '', stat: '' },
      { id: 24, icon: 'shopping_cart_checkout', color: '', stat: '' },

      { id: 25, icon: 'switch_access_shortcut_add', color: '', stat: '' },
      { id: 25, icon: 'switch_access_shortcut_add', color: '', stat: '' },
      { id: 26, icon: 'lock_reset', color: '', stat: '' },
      { id: 26, icon: 'lock_reset', color: '', stat: '' },
      { id: 27, icon: 'join_full', color: '', stat: '' },
      { id: 27, icon: 'join_full', color: '', stat: '' },
      { id: 28, icon: 'webhook', color: '', stat: '' },
      { id: 28, icon: 'webhook', color: '', stat: '' },
      { id: 29, icon: 'assured_workload', color: '', stat: '' },
      { id: 29, icon: 'assured_workload', color: '', stat: '' },
      { id: 30, icon: 'display_settings', color: '', stat: '' },
      { id: 30, icon: 'display_settings', color: '', stat: '' },
      { id: 31, icon: 'install_mobile', color: '', stat: '' },
      { id: 31, icon: 'install_mobile', color: '', stat: '' },
      { id: 32, icon: 'view_cozy', color: '', stat: '' },
      { id: 32, icon: 'view_cozy', color: '', stat: '' },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Container;
