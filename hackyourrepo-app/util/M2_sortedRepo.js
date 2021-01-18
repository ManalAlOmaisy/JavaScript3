//Module 2

import {fetchtRepositorylist} from './M1_fetchRepoList.js';

export async function sortArray(){

    const URL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";
    let repoList = await fetchtRepositorylist(URL)
    const sortedRepositories = repoList.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
    // console.log(sortedRepositories);
    return sortedRepositories;
}