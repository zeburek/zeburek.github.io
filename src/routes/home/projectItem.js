import { h } from 'preact'

const ProjectItem = ({
  title,
  badgesFunc,
  description,
  additionalText,
  href,
  color = null,
  className = null
}) => {
  let classes = 'list-group-item list-group-item-action '
  if (color) classes += `list-group-item-${color}`
  if (className) classes += className

  return (
    <a className={classes} href={href}>
      <div class='d-flex w-100 justify-content-between'>
        <h5 class='mb-1'>{title}</h5>
        {badgesFunc && <small>{badgesFunc()}</small>}
      </div>
      {description && <p class='mb-1'>{description}</p>}
      {additionalText && <small>{additionalText}</small>}
    </a>
  )
}

export default ProjectItem
