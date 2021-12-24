import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  color:  ${props => props.theme.colors.primary};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: left;
  font-family: sans-serif;

  .List {
    display: grid;
    flex-direction: column;
    align-items: left;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    width: 68rem;
    height: 100%;
    padding: 1rem;

    .ListItem {
      height: 100%;
      width: 12rem;
      align-items: center;
      justify-content: center;
      transition: transform .2s;

      img {
        height: 100%;
        width: 100%;
        border-Radius : 0.5rem;
        display: flex;
        flex-direction: column;
      }

      .ListItemInfo {
        position: relative;
        margin-top: -2.5rem;
        display: flex;
        height: 2.5rem;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        border-Radius : 0 0 0.5rem 0.5rem;
        flex-direction: row;
        justify-content : space-between;
        padding: 0.1rem 0.5rem;

        .ItemDescription {
          display: flex;
          flex-direction: column;

          p {
            font-size: 12px;
          }
        }
      }

      :hover {
        transform: scale(1.1);
        border-Radius : 0.5rem;
        border: 1px solid ${props => lighten(0.5, props.theme.colors.primary)};
        
      }
    }
  }

  .Cart {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-Radius : 0.5rem 0 0 0.5rem;
    border-left: 1px solid ${props => lighten(0.5, props.theme.colors.secundary)};
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: -4px 0px 8px 0px ${props => shade(0.5, props.theme.colors.primary)};
    padding: 0.5rem;


    header, footer {
      display: flex;
      height: 4rem;
      width: 100%;
      flex-direction: row;
      justify-content: left;
      align-items: center;

      strong {
        font-size: 18px;
        color: ${props => props.theme.colors.primary};
      }
    }

    main {
      flex: 1;
      height: 30rem;
      overflow-y: auto;


      ul { 
        list-style: none;

        li {
          display:flex;
          height: 3rem;
          padding: 0 0.5rem;
          justify-content: left;
          align-items: center;
          font-size: 14px;
          font-weight: bold;
          transition: all .2s;
          border-radius: 0.5rem;

          :hover {
            background: ${props => shade(0.1, props.theme.colors.secundary)};
            color:  ${props => lighten(0.1, props.theme.colors.primary)};
          }
        }
      }
    }

  }
`;