import { h, Fragment } from 'preact'
import ProjectItem from './projectItem'

const maintained = [
  {
    title: 'python-apitist',
    description: 'Project which is pointed to minify code in python API testing.',
    href: 'https://github.com/zeburek/python-apitist',
    badgesFunc: () => (
      <Fragment>
        <a href='https://github.com/zeburek/python-apitist/actions'>
          <img src='https://img.shields.io/github/workflow/status/zeburek/python-apitist/Python%20package/master' />
        </a>{' '}
        <a href='https://badge.fury.io/py/python-apitist'>
          <img src='https://badge.fury.io/py/python-apitist.svg' />
        </a>{' '}
        <a href='https://pypi.python.org/pypi/python-apitist/'>
          <img src='https://img.shields.io/pypi/dm/python-apitist.svg' />
        </a>
      </Fragment>
    ),
    color: 'success'
  },
  {
    title: 'convclasses',
    description: 'convclasses is an open source Python library for structuring and unstructuring ' +
                 'data. convclasses works best with dataclasses classes and the usual ' +
                 'Python collections, but other kinds of classes are supported by manually registering converters. ' +
                 'Based on Tianche\'s cattrs project.',
    href: 'https://github.com/zeburek/convclasses',
    badgesFunc: () => (
      <Fragment>
        <a href='https://github.com/zeburek/convclasses/actions'>
          <img src='https://img.shields.io/github/workflow/status/zeburek/convclasses/Test%20package/master' />
        </a>{' '}
        <a href='https://badge.fury.io/py/convclasses'>
          <img src='https://badge.fury.io/py/convclasses.svg' />
        </a>{' '}
        <a href='https://pypi.python.org/pypi/convclasses/'>
          <img src='https://img.shields.io/pypi/dm/convclasses.svg' />
        </a>
      </Fragment>
    ),
    color: 'success'
  }
]
const legacy = [
  {
    title: 'cattrs-3.8',
    description: 'Fork of Tianche\'s cattrs with Python 3.8 support - only upstream updates would be provided',
    href: 'https://github.com/zeburek/cattrs-3.8',
    badgesFunc: () => (
      <Fragment>
        <a href='https://pypi.python.org/pypi/cattrs-3.8'>
          <img src='https://img.shields.io/pypi/v/cattrs-3.8.svg' />
        </a>{' '}
        <a href='https://github.com/zeburek/cattrs-3.8'>
          <img src='https://img.shields.io/pypi/pyversions/cattrs-3.8.svg' />
        </a>
      </Fragment>
    ),
    color: 'warning'
  }
]
const examples = [
  {
    title: 'Python API tests example',
    description: 'Simple examples of API tests in Python to the https://restful-booker.herokuapp.com.',
    href: 'https://github.com/zeburek/python-api-tests-example',
    color: 'info'
  },
  {
    title: 'Python API tests examples with cattrs',
    description: 'The same as the previous, except that this tests use cattrs to structure and unstructure data.',
    href: 'https://github.com/zeburek/python-cattrs-example',
    color: 'info'
  },
  {
    title: 'Example of usage Flask, React.js and Mongoengine in one project',
    description: 'Project created for writing tests: ' +
                 'it has locators for elements on the screen, ' +
                 'it has simple CRD methods in REST API. ' +
                 'Project can be run using docker-compose file or from sources.',
    href: 'https://github.com/zeburek/flask-mongoengine-example',
    color: 'info'
  },
  {
    title: 'Example usage of Gatling load testing tool',
    description: 'A simple galing load testing scenario with some logic separation. Loaded project - http://jsonplaceholder.typicode.com.',
    href: 'https://github.com/zeburek/gatling-example',
    color: 'secondary'
  }
]
const others = []

const projects = [
  { name: 'Maintained projects', list: maintained },
  { name: 'Legacy projects', list: legacy },
  { name: 'Examples', list: examples },
  { name: 'Something other', list: others }
]

const Home = () => (
  <div className='mb-5'>
    {projects.map(({ name, list }) => {
      if (list.length > 0) {
        return (
          <div className='row'>
            <div className='col'>
              <h1 className='mt-3'>{name}</h1>
              <div class='list-group'>
                {list.map((project) => {
                  return (
                    <ProjectItem {...project} />
                  )
                })}
              </div>
            </div>
          </div>
        )
      }
    })}
  </div>
)

export default Home
