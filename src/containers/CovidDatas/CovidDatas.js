import React from 'react'

import CovidData from '../../components/CovidData/CovidData'
import classes from './CovidDatas.module.css'

const LINK = "https://api.apify.com/v2/key-value-stores/C10heVVVE8yBd1YvF/records/LATEST?disableRedirect=true"
class CovidDatas extends React.Component {
  state = {
    covidDatas: [
      { 
        icon: "fas fa-user-plus",
        cases: 0,
        title: 'GJITHSEJ RASTE',
      },
      { 
        icon: "fas fa-heart", 
        cases: 0,
        title: 'TE SHERUAR',
      },
      { 
        icon: "fas fa-heart-broken", 
        cases: 0,
        title: 'ME FATALITET',
      },
      {
        icon: 'fas fa-ambulance',
        cases: 0,
        title: 'AKTIVE'
      }
    ],
    isLoading: true,
  }

  componentDidMount() {
    fetch(LINK)
      .then((response) => response.json())
      .then((data) => {
        let items = [...this.state.covidDatas]

        const confirmed = {
          ...items[0],
          cases: data.infected
        }

        const recovered = {
          ...items[1],
          cases: data.recovered
        }

        const deceased = {
          ...items[2],
          cases: data.deceased
        }


        const ActiveCases = confirmed.cases - recovered.cases

        const activeCases = {
          ...items[3],
          cases: ActiveCases
        }

        items[0] = confirmed
        items[1] = recovered
        items[2] = deceased
        items[3] = activeCases

        this.setState({ covidDatas: items, isLoading: false })
      });
  }
  render() {
    const displayData = this.state.covidDatas.map(data => {
      return <CovidData 
        icon={data.icon} 
        casesNumber={data.cases}
        title={data.title} 
        loading={this.state.isLoading}/>
    })
    return (
      <div className={classes.CovidDatas}>
        { displayData }
      </div>
    )
  }
}

export default CovidDatas