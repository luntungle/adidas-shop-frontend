import React from 'react';
import Filtericon from './filter.png';
import './filter.css';

export default () => (
  <div className="Filter">
    <img src={Filtericon} className="Filtericon" alt="text for filter icon" />
    <button className="filter-active">Men</button>
    <button>Women</button>

    <span className="filter-size-label">size</span>
    <button>36</button>
    <button>37</button>
    <button>38</button>
    <button>39</button>
    <button>40</button>
    <button className="filter-active">41</button>
    <button>42</button>
  </div>
  );
