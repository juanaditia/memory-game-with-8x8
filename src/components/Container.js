import { useState, useEffect } from 'react';
import Card from './Card';
import Swal from 'sweetalert2';
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
      { id: 11, icon: 'support', color: '#FF5733', stat: '' },
      { id: 11, icon: 'support', color: '#FF5733', stat: '' },
      { id: 12, icon: 'group_work', color: '#F13108', stat: '' },
      { id: 12, icon: 'group_work', color: '#F13108', stat: '' },
      { id: 13, icon: 'nightlight_round', color: '#FAA325', stat: '' },
      { id: 13, icon: 'nightlight_round', color: '#FAA325', stat: '' },
      { id: 14, icon: 'label_important', color: '#C4F519', stat: '' },
      { id: 14, icon: 'label_important', color: '#C4F519', stat: '' },
      { id: 15, icon: 'commute', color: '#A3EC07', stat: '' },
      { id: 15, icon: 'commute', color: '#A3EC07', stat: '' },
      { id: 16, icon: 'flight_land', color: '#1CFF23', stat: '' },
      { id: 16, icon: 'flight_land', color: '#1CFF23', stat: '' },

      { id: 17, icon: 'pregnant_woman', color: '#01C907', stat: '' },
      { id: 17, icon: 'pregnant_woman', color: '#01C907', stat: '' },
      { id: 18, icon: 'offline_pin', color: '#01C953', stat: '' },
      { id: 18, icon: 'offline_pin', color: '#01C953', stat: '' },
      { id: 19, icon: 'alarm_add', color: '#4DF6B1', stat: '' },
      { id: 19, icon: 'alarm_add', color: '#4DF6B1', stat: '' },
      { id: 20, icon: 'spellcheck', color: '#0F9F64', stat: '' },
      { id: 20, icon: 'spellcheck', color: '#0F9F64', stat: '' },
      { id: 21, icon: 'eject', color: '#157CF1', stat: '' },
      { id: 21, icon: 'eject', color: '#157CF1', stat: '' },
      { id: 22, icon: 'gif_box', color: '#0A97CC', stat: '' },
      { id: 22, icon: 'gif_box', color: '#0A97CC', stat: '' },
      { id: 23, icon: 'currency_exchange', color: '#5E11E5', stat: '' },
      { id: 23, icon: 'currency_exchange', color: '#5E11E5', stat: '' },
      { id: 24, icon: 'shopping_cart_checkout', color: '#7A31F8', stat: '' },
      { id: 24, icon: 'shopping_cart_checkout', color: '#7A31F8', stat: '' },
      {
        id: 25,
        icon: 'switch_access_shortcut_add',
        color: '#340585',
        stat: '',
      },
      {
        id: 25,
        icon: 'switch_access_shortcut_add',
        color: '#340585',
        stat: '',
      },
      { id: 26, icon: 'lock_reset', color: '#620585', stat: '' },
      { id: 26, icon: 'lock_reset', color: '#620585', stat: '' },
      { id: 27, icon: 'join_full', color: '#BE35F1', stat: '' },
      { id: 27, icon: 'join_full', color: '#BE35F1', stat: '' },
      { id: 28, icon: 'webhook', color: '#EC00FF', stat: '' },
      { id: 28, icon: 'webhook', color: '#EC00FF', stat: '' },
      { id: 29, icon: 'assured_workload', color: '#791481', stat: '' },
      { id: 29, icon: 'assured_workload', color: '#791481', stat: '' },
      { id: 30, icon: 'display_settings', color: '#E42257', stat: '' },
      { id: 30, icon: 'display_settings', color: '#E42257', stat: '' },
      { id: 31, icon: 'install_mobile', color: '#F94A7A', stat: '' },
      { id: 31, icon: 'install_mobile', color: '#F94A7A', stat: '' },
      { id: 32, icon: 'view_cozy', color: '#C4073B', stat: '' },
      { id: 32, icon: 'view_cozy', color: '#C4073B', stat: '' },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function check(current) {
    if (items[current].id === items[prev].id) {
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
      setMoves((moves) => moves + 1);
      setBestScore((bestScore) => moves);
    } else {
      check(id);
    }
  }

  function handleRestart() {
    setMoves(0);
    setBestScore(0);
    let tempItem = [];
    items.map((item) => {
      if (item.stat === 'correct') {
        item.stat = '';
      }
      tempItem.push(item);
    });
    setItems(tempItem);
  }

  useEffect(() => {
    const getNotCorrect = items.find((item) => item.stat !== 'correct');
    if (!getNotCorrect) {
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      console.log(highScore, 'end');
      Swal.fire({
        title: 'Your Finish The game !!!',
        text: 'Your Best Score : ' + highScore,
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        handleRestart();
      });
    }
  }, [items]);

  return (
    <div className="">
      <div className="p-6 max-w-sm mx-auto rounded-xl flex items-center justify-center space-x-4 text-white">
        <div className="">Move : {moves}</div>
        <div>Best Score : {bestScore}</div>
        <button
          onClick={handleRestart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>

      <div className="container">
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Container;
