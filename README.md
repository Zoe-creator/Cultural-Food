
# Project Overview
https://zen-mcnulty-99aa12.netlify.app/
## Project Name
Cultural Food

## Project Description
a website showing cutural food worldwide.

## API and Data Sample

```
{
    "records": [
        {
            "id": "recIOpAVRVcxWp9ug",
            "fields": {
                "carbs": 28,
                "description": "Chewy, steamed wheat flour noodles, tossed with bean sprouts, cucumbers, cilantro, and cubes of spongy house-made gluten, in all our proprietary sauce...",
                "likes": 41,
                "name": "LIANG PI",
                "origin": "Xi'an, China",
                "calories": 117,
                "fat": 67,
                "pictureURL": "http://1vt52lbjubq3o1o2y36z6rcs.wpengine.netdna-cdn.com/wp-content/uploads/2016/10/purplecold.jpeg"
            },
            "createdTime": "2021-02-15T21:35:25.000Z"
        },
}
```
## WireFrams
![wireframs](https://res.cloudinary.com/lizhenwen727/image/upload/v1613424101/Screen_Shot_2021-02-15_at_4.20.40_PM_bwcsgn.png)
![wireframs](https://res.cloudinary.com/lizhenwen727/image/upload/v1613424091/Screen_Shot_2021-02-15_at_4.21.02_PM_z5zsas.png)


## Component Hierarchy
https://drive.google.com/file/d/1Vdi8XTZJfEB0yDfiYr5WC-8EtZMzMfAP/view?usp=sharing
![Components](https://res.cloudinary.com/lizhenwen727/image/upload/v1613512105/Screen_Shot_2021-02-16_at_4.47.49_PM_onpqsa.png)

#### MVP 

1. Homepage shows picture, and food name
2. second page shows details of the food being selected.
3. a form is showed on the first page/direct to a new tab to allow users to add new food.



#### PostMVP  

- users are allow to like food
- slideShow on landing page
- shows more info when the mouse is hover on home page,  and the pic becomes more transparent


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 16| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|Feb 17| react home page, API render, second page-detail of each food | complete 
|Feb 18| CSS,Media Query  | complete
|Feb 19| MVP, Project deploy, | complete
|Jan 23| Presentation  | Incomplete


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| CSS - color,border,size  | L | 3 hrs| 3hrs | 3hrs |
| CSS - flexbox or grid home page | H | 3hrs| 3hrs | 3hrs |
| CSS - flexbox or grid second  page | H | 3hrs| 5hrs | 5hrs |
| CSS - form|  H | 1hrs| 2hrs | 2 hrs |
| CSS - adjust screen, media query | H | 3hr | 2 hrs | 2 hrs |
| nav bar | H | 2hrs | .5hrs | .5hrs |
| Hompage shows pic and basic info | H | 2hr | 1 hrs | 1hrs|
| form-allow users to insert their data | H | 2hr | 1 hrs | 1 hrs |
| second page shows all detail of the clicked food | H | 2hr | 1 hrs | 1 hrs|
| allow users to like or dislike a review | H | 3hr | 2 hrs | 2 hrs |
| hover pic to show addition info on homepage | H | 3hr | 1 hrs | 1 hrs |
| work with API | H | 2hrs | .5hrs | .5hrs |
| Total | H | 32hrs | 22hrs | 22hrs |

## Code Snippet

allow background to change pic every 3 second automatically.
```useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 6)
      setCount(random)
      return () => clearInterval(interval);
    }, 3000);
  }, [])
```
## Change Log

I added extra page to display nutrientFacts, and allow users to update nutrients facts

## SWOT Analysis

## SWOT Analysis

### Strengths:

I have big picture on what I like to display and what functionalities should include on my website.

### Weaknesses:

I am still struggling with CSS grid and flex box.

### Opportunities:

This project is giving me an opportunities to showing people what I have learned for 2 weeks about the react.

### Threats:

Whenever I get stuck with an error or an issue, I would have to take plenty of time to search for a solution. I tend to solve one problem first before I move into next step, so that I may run out the time.
