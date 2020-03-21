module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  let dream_team = members.reduce((previousValue, member) => {
    if (typeof member == "string") { 
      member = member.replace(/\s/g, '');
      return previousValue =  previousValue + member[0];
    } else {
      return previousValue;
    }
  },""
  ) 

  return dream_team.toUpperCase().split("").sort().join("")

};





