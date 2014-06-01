Projects.Project = DS.Model.extend({
  title: DS.attr('string'),
   summary: DS.attr('string'),
   country: DS.attr('string'),
   org: DS.attr('string'),
   start: DS.attr('date'),
   end: DS.attr('date'),
   website: DS.attr('string'),
   contact: DS.attr('contact'),
   description: DS.attr('string'),
   media: DS.attr('string'),
   resources: DS.attr('string'),
   admin: DS.attr('string'),
   users: DS.attr('string'),
   tags: DS.hasMany('tag', {async: true})
});

Projects.Tag = DS.Model.extend({
	title: DS.attr('string')
});

Projects.Tag.FIXTURES = [{id: 1, title: 'design'}, {id: 2, title: 'IT'}, {id: 3, title: 'French'}, {id: 4, title: 'language'}];

//sample data for testing and development
//see also: http://emberjs.com/guides/models/the-fixture-adapter/
Projects.Project.FIXTURES = [
 {
   id: 1,
   title: 'Project 1',
   summary: 'A Developing Real Learners project',
   country: 'Georgia',
   org: 'Developing Real Learners',
   start: 'September 2013',
   end: 'June 2014',
   website: 'developingreallearners.org',
   contact: '',
   description: 'Project 1 is a project where students develop as learners in Georgia.  Lorem ipsum ipso facto et cetera peter cetera.',
   media: 'image1.jpg',
   resources: 'Learner Profile',
   admin: 'Robert Thorn',
   users: 'rthorn',
   tags: ''
 },
 
 {
   id: 2,
   title: 'Pakistan Action Network',
   summary: 'A network of schools in Pakistan that promotes action out of learning',
   country: 'Pakistan',
   org: 'The Pakistan Learner\'s Academy',
   start: 'September 2011',
   end: '',
   website: 'pakistanaction.org',
   contact: 'admin@pakistanaction.org',
   description: 'The Pakistan Action Network allows students in Pakistan to develop as learners and global citizens through taking positive action in their community.',
   media: 'image2.jpg',
   resources: 'Learner Profile',
   admin: 'Ali Abbas',
   users: 'Aliab, MIbrahimi',
   tags: [1, 2]
 },
 {
   id: 3,
   title: 'Paris Young Learners Project',
   summary: 'Spreading learner-centered education in France',
   country: 'France',
   org: 'Ecole de Paris',
   start: 'May 2014	',
   website: 'ecoledeparis.org',
   contact: '',
   description: 'Une chandelle fait une danse solitaire\
	A la fenetre un visage regarde la mer\
	Elle cherche pour y voir\
	Un signe pour lui donner l\'espoir\
	Que par mirable il est sauve\
	Et toutes de ses prieres sont exaucees',
   media: 'image3.jpg',
   resources: 'Learner Profile',
   admin: 'Pierre Lefranc',
   users: 'plefranc, jcousteau',
   tags: [3,4]
 }
];


			
			