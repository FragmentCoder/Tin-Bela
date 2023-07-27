import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './style';
import CHeader from '../../components/header/CHeader';
import CStrings from '../../strings/CStrings';
import CClander from '../../components/calendar/CClander';
import PendingGroupRequest from '../../components/group_account_status/PendingGroupRequest';
import NewGroupRequest from '../../components/group_account_status/NewGroupRequest';
import AcceptGroupRequest from '../../components/group_account_status/AcceptGroupRequest';

import {AppContext} from '../../context/CContext';
import HomeView from '../../components/home_view/HomeView';

function Home(props) {
  const {accountStatus} = useContext(AppContext);

  const newGroupCreate = () => {
    console.log(`create_group`);
    props.navigation.navigate('create_group');
  };
  const jointRequest = () => {
    console.log(`join_the_office_group`);
    props.navigation.navigate('join_the_office_group');
  };
  const makeMealList = () => {
    console.log(`weekly_meal_plan`);
    props.navigation.navigate('weekly_meal_plan');
  };

  const Account = () => {
    if (accountStatus == CStrings.pending) {
      return <PendingGroupRequest />;
    } else if (accountStatus == CStrings.accept) {
      return <AcceptGroupRequest makeMealListButton={makeMealList} />;
    } else if (accountStatus == CStrings.home) {
      return <HomeView />;
    } else {
      return (
        <NewGroupRequest
          newGroupCreateButton={newGroupCreate}
          jointRequestButton={jointRequest}
        />
      );
    }
  };
  return (
    <CHeader iconSize={0} title={CStrings.home} rightIconSize={30}>
      <View style={styles.container}>
        <CClander />
        <Account />
      </View>
    </CHeader>
  );
}
export default Home;
