import React from 'react'
import Main from '../Main'
import Row from '../Row'
import Req from '../../Request'

export const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowID='1'  title='Upcoming' fetchURL={Req.requestUpcoming} />
        <Row rowID='2' title='Popular' fetchURL={Req.requestPopular} />
        <Row rowID='3' title='Trending' fetchURL={Req.requestTrending} />
        <Row rowID='4' title='Top Rated' fetchURL={Req.requestTopRated} />
        <Row rowID='5' title='Horror' fetchURL={Req.requestHorror} />
    </div>
  )
}
