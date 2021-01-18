//Module 5

import {sortArray} from './M2_sortedRepo.js';
import {fetchtRepositorylist} from './M1_fetchRepoList.js';

export async function fetchContributor(num) {
    let response = await sortArray();
    let data = await response[num].contributors_url;

  // fetch contributor data
    let contributor_data = await fetchtRepositorylist(data);
    return contributor_data;
  }