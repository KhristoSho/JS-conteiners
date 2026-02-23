import { Bowerman } from "../characters/bowerman";
import { Team } from "../team";


test("add characters in a team", () => {

  const bowerman1 = new Bowerman("Ivan");
  const bowerman2 = new Bowerman("Igor");
  const team = new Team();

  team.add(bowerman1);
  team.add(bowerman2);

  expect(team.members.size).toBe(2);

});

test("test for throw doublicated characters", () => {

  const bowerman1 = new Bowerman("Ivan");
  const team = new Team();

  team.add(bowerman1);

  expect(() => {
    team.add(bowerman1);
  }).toThrow(`Character: ${bowerman1} is already in members`);

});

test("add all characters in a team", () => {

  const bowerman1 = new Bowerman("Ivan");
  const bowerman2 = new Bowerman("Igor");
  const bowerman3 = new Bowerman("Sergey");
  const team = new Team();

  team.addAll(bowerman1, bowerman1, bowerman2, bowerman2, bowerman3, bowerman3);

  expect(team.members.size).toBe(3);

});

test("test transform Set in array", () => {

  const bowerman1 = new Bowerman("Ivan");
  const bowerman2 = new Bowerman("Igor");
  const team = new Team();
  const expected = [bowerman1, bowerman2]

  team.addAll(bowerman1, bowerman2);
  expect(team.toArray()).toEqual(expected);

});